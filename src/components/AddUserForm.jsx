import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    const onSubmit = (data, e) => {
        console.log(data)

        props.addUser(data)

        e.target.reset();
    }

    const { register, handleSubmit, formState: {errors} } = useForm();

    return (


    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name", { required: true }) } />
            {errors.name && <div>Campo requerido</div> }
        <label>Username</label>
        <input type="text" {...register("username", { required: true }) } />
            {errors.username && <div>Campo requerido</div> }
        <button>Add new user</button>
    </form>
    );
}

export default AddUserForm;