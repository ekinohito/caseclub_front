import { Field, FieldArray, Form, Formik } from "formik";
import { PostCreate, PostService } from "../../client";
import { usePostStore } from "../../state";
import { AttachmentImage } from "../AttachmentImage";
import { Button } from "../Button";
import { FileUpload } from "../FileUpload";
import { Paper } from "../Paper";
import { RemoveIcon } from "../RemoveIcon";

interface Props {}

export function CreatePostForm({}: Props) {
    const addPost = usePostStore(state => state.addPost)
    return (
        <Paper className="w-full max-w-lg">
            <Formik<PostCreate & { images: number[] }>
                initialValues={{
                    text: "",
                    images: [],
                }}
                onSubmit={async (values) => {
                    console.log(values);
                    const { images, ...post } = values;
                    const newPost = await PostService.createPostPostPost({
                        images,
                        ...post,
                    });
                    
                    addPost(newPost)
                    console.log(newPost);
                }}
            >
                {({ values }) => (
                    <Form className="grid gap-2 items-center">
                        <label>Текст поста</label>
                        <Field
                            as="textarea"
                            name="text"
                            className="p-2 rounded-md bg-gray-100"
                        />

                        <FieldArray
                            name="images"
                            render={(arrayHelpers) => (
                                <div className="col-span-2">
                                    <>
                                        {values.images &&
                                        values.images.length > 0 ? (
                                            <div className="overflow-scroll flex flex-row space-x-2">
                                                {values.images.map(
                                                    (image, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex-none relative"
                                                        >
                                                            <div className="bg-black cursor-pointer transition-opacity opacity-0 hover:opacity-50 absolute inset-0 grid place-items-center" 
                                                                onClick={() => {arrayHelpers.remove(
                                                                    index
                                                                )}}>
                                                                    <RemoveIcon width={40} height={40}/>
                                                                </div>
                                                            <AttachmentImage
                                                                className=" w-44 h-44"
                                                                attachmentId={
                                                                    image
                                                                }
                                                            />
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        ) : null}
                                    </>
                                    <FileUpload onFileUploaded={id => arrayHelpers.push(id)}>Добавить картинку</FileUpload>
                                </div>
                            )}
                        />
                        <Button type="submit" className="col-span-2" color="blue">
                            Создать пост
                        </Button>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}
