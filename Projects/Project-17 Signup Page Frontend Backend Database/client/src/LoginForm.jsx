import { useState } from "react";
function LoginForm() {
    const [form, setForm] = useState({ email: "", password: "" });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const msg = await res.text();
        alert(msg);
        setForm({ email: "", password: "" });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
            >
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <input
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 border rounded-md"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    Login
                </button>
                <p className="text-center text-sm">
                    Don't have an account?{" "}
                    <a href="/" className="text-blue-500 hover:underline">Sign up</a>
                </p>

            </form>
        </div>
    );
}
export default LoginForm;
