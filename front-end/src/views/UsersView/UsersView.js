import React, { useState } from "react"
import SearchInput from '../../components/SearchInput/SearchInput';
import UserService from "../../services/UserService";
import Card from "../../components/Card/Card";

const UsersView = () => {
    const [users, setUsers] = useState([]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const response = await UserService.uploadFile(formData)
        setUsers(response.data.content)
    }

    return (
        <div>
            <input type="file" accept=".csv" onChange={handleFileUpload} />
            <SearchInput />
            {users.map((user, index) =>
                <Card key={index} user={user} />)
            }
        </div>
    )
}

export default UsersView;

