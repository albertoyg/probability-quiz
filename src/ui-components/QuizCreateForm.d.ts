/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuizCreateFormInputValues = {
    difficulty?: string;
};
export declare type QuizCreateFormValidationValues = {
    difficulty?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuizCreateFormOverridesProps = {
    QuizCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    difficulty?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type QuizCreateFormProps = React.PropsWithChildren<{
    overrides?: QuizCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuizCreateFormInputValues) => QuizCreateFormInputValues;
    onSuccess?: (fields: QuizCreateFormInputValues) => void;
    onError?: (fields: QuizCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuizCreateFormInputValues) => QuizCreateFormInputValues;
    onValidate?: QuizCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuizCreateForm(props: QuizCreateFormProps): React.ReactElement;
