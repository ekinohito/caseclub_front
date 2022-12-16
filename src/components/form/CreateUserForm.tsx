import { Field, Form, Formik } from "formik";
import { UserCreate, UserService } from "../../client";
import { Button } from "../Button";
import { Paper } from "../Paper";

interface Props {}

export function CreateUserForm({}: Props) {
    return (
        <Paper className="w-full">
            <Formik<UserCreate>
                initialValues={{
                    email: "",
                    name: "",
                    password: "",
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    const user = await UserService.createUserUserPost(values);
                    console.log(user);
                }}
            >
                {() => (
                    <Form className="grid grid-cols-1 gap-2 items-center">
                        <label>Email</label>
                        <Field type="email" name="email" className="p-2 rounded-md bg-gray-100"/>
                        <label>Имя</label>
                        <Field type="text" name="name" className="p-2 rounded-md bg-gray-100"/>
                        <label>Пароль</label>
                        <Field type="password" name="password" className="p-2 rounded-md bg-gray-100"/>
                        <Button className="col-span-2" color="blue">Зарегистрировать</Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}
