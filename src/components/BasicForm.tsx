import React, { Component } from 'react'
import SimpleReactValidator from 'simple-react-validator/dist/simple-react-validator.min.js';

class BasicFormState {
    constructor(
        public firstName: string,
        public lastName: string,
        public manager: boolean,
        public role: string,
        public comments: string,
        public curriculum: string
    ) { }
}

export default class BasicForm extends Component<any, BasicFormState> {
    private fileInputRef: any;
    validator: any;

    constructor(props: any) {
        super(props);

        this.state = { firstName: '', lastName: '', 
            manager: false, role: '', comments: '',
        curriculum: '' };

        this.fileInputRef = React.createRef();

        this.validator = new SimpleReactValidator({
            className: 'errorMessage',
            messages: {
                required: 'Il campo :attribute è obbligatorio',
                alpha: 'Solo caratteri alfabetici.'
            }
        });
    }

    handleUpdate = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const target = evt.target;
        const value = target.type === 'checkbox' ?
            target.checked :
                ( target.type === 'file' ?
                this.fileInputRef.current.files[0].name :
                target.value );
        const name = target.name;

        //@ts-ignore : workaround to simplify form mgmnt
        this.setState({ [name] : value });
    };

    handleSelectUpdate = (evt: React.ChangeEvent<HTMLSelectElement> | 
            React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        //@ts-ignore : workaround to simplify form mgmnt
        this.setState({ [name] : value });
    }

    handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        if(this.validator.allValid()) {
            alert(JSON.stringify(this.state));
        //alert('Il file selezionato è: ' + this.fileInputRef.current.files[0].name);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }   
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="firstName">First Name</label>
                        <div className="col-10">
                            <input type="text" className="form-control" name="firstName" 
                                value={this.state.firstName}
                                onChange={this.handleUpdate} />
                            { this.validator.message('FirstName', this.state.firstName, 'required|alpha') }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastName">Last Name</label>
                        <div className="col-10">
                            <input type="text" className="form-control" name="lastName" 
                                value={this.state.lastName}
                                onChange={this.handleUpdate} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="role">Role</label>
                        <div className="col-10">
                            <select name="role"
                                value={this.state.role}
                                onChange={this.handleSelectUpdate}>
                                    <option>--- SELECT A ROLE ---</option>
                                    <option value='user'>Regular User</option>
                                    <option value="admin">Administrator</option>
                                    <option value="guest">Guest</option>
                            </select>
                            { this.validator.message('Role', this.state.role, 'required') }
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="manager">Manager?</label>
                        <div className="col-10">
                            <input type="checkbox" className="form-control" name="manager" 
                                checked={this.state.manager}
                                onChange={this.handleUpdate} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="curriculum">Curriculum Vitae</label>
                        <div className="col-10">
                            <input type="file" className="form-control" name="curriculum" 
                                ref={this.fileInputRef} onChange={this.handleUpdate} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="comments">Comments</label>
                        <div className="col-10">
                            <textarea name="comments"
                                value={this.state.comments}
                                onChange={this.handleSelectUpdate}>
                            </textarea>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-10">
                            <input className="btn btn-primary" type="submit" 
                            value="Submit"  />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}