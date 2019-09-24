class Signin extends React.Component{

    constructor(props){
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
          email:'',
          password:''
        };
    }

    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    signIn(){
        // alert('email is : ' +this.state.email+ ' password is : '+this.state.password);
        // alert('lalalal')
        axios.post('/signin', {
            email: this.state.email,
            password:this.state.password
        })
        .then(function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
    
    }

    render(){
        return(
            <form className="form-signin">
                <h2 className="form-signing-heading">Please sign in</h2>
                <label for="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-controll" placeholder="Email address" required autoFocus onChange={this.handleEmailChange}></input>
                <label for="inputPassword" className="sr-only"> Password</label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handlePasswordChange}/>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.signIn}> Sign in
                </button>
            </form>
        )
    }

  
}



ReactDOM.render(
    <Signin/>, 
    document.getElementById('app')
);
