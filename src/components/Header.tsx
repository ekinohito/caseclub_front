import { AuthService, OpenAPI, PostService } from "../client";
import { useAuthStore } from "../state";
import { Button } from "./Button";
import { Icon } from "./Icon";

export function Header() {
    const {isAuthenticated, setIsAuthenticated} = useAuthStore()
    return (
        <header
            className={`
            bg-blue-400 h-14 w-full flex flex-row items-center justify-center sticky top-0
            backdrop-blur-sm bg-opacity-80 transition-all `}
        >
            <div className="w-full max-w-3xl text-white flex flex-row justify-between items-center">
                <div className="flex flex-row text-xl">
                    <Icon />
                    <h1 className="mx-2 font-bold">Bauman Case Club</h1>
                </div>
                {isAuthenticated ? 
                <Button onClick={async () => {
                    OpenAPI.TOKEN = ''
                    setIsAuthenticated(false)
                }}>Logout</Button>:
                <Button onClick={async () => {
                    const token = await AuthService.loginAuthTokenPost({username: 'string', password: 'string'})
                    OpenAPI.TOKEN = token.access_token
                    setIsAuthenticated(true)
                }}>Login</Button>
                }
            </div>
        </header>
    );
}
