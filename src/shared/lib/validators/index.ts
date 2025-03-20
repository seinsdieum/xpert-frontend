type FieldValidator = (str: string) => boolean;

export const validatePassword: FieldValidator = (str: string) => {
    return (
        str.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/)?.[0]
            .length === str.length
    );
};

export const validateEmail: FieldValidator = (str: string) => {
    return str.match(/^\S+@\S+\.\S+$/)?.[0].length === str.length;
};

export const validateUsername: FieldValidator = (str: string) => {
    return str.match(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/)?.[0].length === str.length;
};
