import React, { useCallback, useState } from "react"
import SearchInput from '../../components/SearchInput/SearchInput';
import UserService from "../../services/UserService";
import Card from "../../components/Card/Card";
import "./UsersView.css"
import HeaderBar from "../../components/Header/HeaderBar";

const UsersView = () => {
    const [users, setUsers] = useState([]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const response = await UserService.uploadFile(formData)
        setUsers(response.data.content)
    }

    const handleDataChanged = useCallback((data) => {
        setUsers(data);
    }, []);

    return (
        <div>
            <HeaderBar />
            <div className="users-view-inputs-container">
                <SearchInput dataChanged={handleDataChanged} />
                <label className="users-view-input-file">
                    <input
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                    />
                    <span>Importar CSV</span>
                </label>            
            </div>
            <div className="users-view-cards-container">
                {users.map((user, index) =>
                    <Card key={index} user={user} />)
                }
            </div>
        </div>
    )
}

export default UsersView;

