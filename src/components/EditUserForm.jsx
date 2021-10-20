import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
    console.log(props.currentUser)

    const onSubmit = (data, e) => {
        console.log(data)
        data.id= props.currentUser.id
        props.updateUser(props.currentUser.id, data);
        e.target.reset();
    }

    const { register, handleSubmit, formState: {errors},setValue } = useForm({
        defaultValues: props.currentUser
    });
    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);
    

    return (


    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input type="text" {...register("name", { required: true }) } />
            {errors.name && <div>Campo requerido</div> }
        <label>Username</label>
        <input type="text" {...register("username", { required: true }) } />
            {errors.username && <div>Campo requerido</div> }
        <button>Edit user</button>
    </form>
    );
}

export default EditUserForm;