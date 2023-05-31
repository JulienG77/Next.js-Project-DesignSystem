export interface FormsType {
    control?: any;
    onSubmit: any;
    errors: any;
    isLoading: boolean;
    register: any;
    handleSubmit: any;
}


export interface RegisterFormFieldsType {
    email: string;
    password: string;
    how_did_you_know: string;
}
export interface LoginFormFieldsType {
    email: string;
    password: string;
}

export interface ForgottenPasswordFormFieldsType {
    email: string;
    // password: string;
}