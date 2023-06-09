import clsx from "clsx";
import {Typography} from "../typography/typography";
import React from "react";

interface Props {
    isLoading: boolean;
    placeholder:string;
    type?: "text" | "email" | "password";
    register: any;
    errors:any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
}

export const Input = ({
                          isLoading,
                          placeholder,
                          type = "text",
                          register,
                          errors,
                          errorMsg = "Merci de renseigner ce champs.",
                          id,
                          required = true,
                          isAutoCompleted = false,

                      }: Props) => {

            // console.log("errors", errors[id]);

    return (
<div className="space-y-2">
    <input type={type}
           placeholder={placeholder}
           className={clsx(
               isLoading && "cursor-not-allowed",
               errors[id]
                   ? "placeholder-alert-danger text-alert-danger" : "placeholder-alert-grey-600",
               "w-full placeholder-grey-600 p-4 font-light border border-grey-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
           )}
           disabled={isLoading}
           {...register(id, {
               required: {
                   value: required,
                   message: errorMsg,
               },
           })}
           autoComplete={isAutoCompleted ? "on" : "off"}
    />



    { errors[id] && (

        <Typography variant="caption4" component="div" theme="danger">
            {errors[id]?.message}
        </Typography>

    )}
</div>
    );
};