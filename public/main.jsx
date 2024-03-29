var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;


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
            <div>
                <form className="form-signin">
                    <h2 className="form-signing-heading">Please sign in</h2>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-controll" placeholder="Email address" required autoFocus onChange={this.handleEmailChange}></input>
                    <label for="inputPassword" className="sr-only"> Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={this.handlePasswordChange}/>
                    <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.signIn}> Sign in
                    </button>
                </form>
                <div>
                    <Link to="/signup">{'Signup'}</Link>
                </div>
            </div>
           

        )
    }

  
}

class Signup extends React.Component{

    signUp(){

    }

    render(){
        return(
            <div>
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please sign up</h2>
                    <label for="inputName" className="sr-only">Name</label>
                    <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />

                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp} type="button">Sign up</button>
                </form>
                
            </div>
        )
    }
}



// ReactDOM.render(
//     <Signin/>,
//     document.getElementById('app')
// );

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Signin} path="/"></Route>
        <Route component={Signup} path="/signup"></Route>
    </Router>,
document.getElementById('app'));