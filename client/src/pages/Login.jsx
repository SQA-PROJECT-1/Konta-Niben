import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const Login = () => {

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const loginUrl = 'http://localhost:5000/api/users/login/';

        const userCredentials = {
            userEmail: form.email.value,
            userPassword: form.password.value,
        };

       // console.log(userCredentials)
        try {
            const response = await axios.post(loginUrl, userCredentials);
            localStorage.setItem('set-data-for-user', JSON.stringify(response.data));
            localStorage.setItem('set-token-for-user', response.data.accessToken);
            
            if(response.data.userRole =="admin"){
                console.log("yes")
            }
            else console.log("no")
            alert("login successfull")
            form.reset();
            if(response.data.userRole =="admin"){
                navigate("/dashboard");
            }
            else navigate("/")
            
            window.location.reload()
        } catch (error) {
            console.log(error);
            alert("email or password wrong")
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center justify-between">
                            <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div class="mt-2">
                            <input name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <button type="submit" class="flex w-full justify-center rounded-md bg-orange-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                    </div>
                </form>
                <p class="mt-10 text-center text-sm text-gray-500">
                    Not a member?
                    <Link to="/register" class="font-semibold leading-6 text-orange-600 hover:text-indigo-500">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;