import { Formik, Form, Field } from "formik";
import { AuthService, Body_login_auth_token_post, OpenAPI, UserCreate, UserService } from "../../client";
import { useAuthStore } from "../../state";
import { Button } from "../Button";
import { Paper } from "../Paper";

interface Props {}

export function AuthUserForm({}: Props) {
    const setAuthId = useAuthStore(store => store.setAuthId)
    return (
        <Paper className="w-max">
            <Formik<Body_login_auth_token_post>
                initialValues={{
                    username: "admin@localhost",
                    password: "root",
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    const {access_token} = await AuthService.loginAuthTokenPost(values);
                    console.log(access_token);
                    OpenAPI.TOKEN = access_token
                    const user = await UserService.currentUserCurrentGet()
                    setAuthId(user)
                }}
            >
                {() => (
                    <Form className="grid grid-cols-1 gap-2 items-center">
                        <label>Email</label>
                        <Field type="email" name="username" className="p-2 rounded-md bg-gray-100"/>
                        <label>Пароль</label>
                        <Field type="password" name="password" className="p-2 rounded-md bg-gray-100"/>
                        <Button className="col-span-2" color="blue">Войти</Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}
