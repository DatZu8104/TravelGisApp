import * as React from "react";
import {Link} from "react-router-dom";
import "./css/Login.css";
import Header from "./header"; // Dùng lại file CSS từ login

const ForgotPassword = () => {
    const [email, setEmail] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Reset link sent to: ${email}`);
    };

    return (
        <div>
            <Header/>
            <div className="login-wrapper">
                <div className="login-box">
                    <h2>Forgot Password</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Enter your email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button type="submit" className="sign-in-btn">
                            CONTINUE
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>
                            Remember your password?{" "}
                            <Link to="/login" className="signup-link">
                                Back to Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
