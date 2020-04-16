import React from 'react';
import User from '../models/User';

interface UserListProps {
    users: User[];
}

export default class UserList extends React.Component<UserListProps,{}> {
    render() {
        const items: User[] = this.props.users;

        const listOfItems: JSX.Element[] = items.map(
            (item: User, index: number, users: User[]) => (<tr key={index}>
                <td>{item.id}</td>
                <td>{item.userName}</td>
                <td>{item.role}</td>
                </tr>)
        );

        const userTable = <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                {listOfItems}
            </tbody>
        </table>;

        return(
            <div>
                {this.props.children}
                {userTable}
            </div>
        );
    }
}