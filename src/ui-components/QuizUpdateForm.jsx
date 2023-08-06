/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SelectField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Quiz } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function QuizUpdateForm(props) {
  const {
    id: idProp,
    quiz: quizModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    difficulty: "",
  };
  const [difficulty, setDifficulty] = React.useState(initialValues.difficulty);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = quizRecord
      ? { ...initialValues, ...quizRecord }
      : initialValues;
    setDifficulty(cleanValues.difficulty);
    setErrors({});
  };
  const [quizRecord, setQuizRecord] = React.useState(quizModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Quiz, idProp)
        : quizModelProp;
      setQuizRecord(record);
    };
    queryData();
  }, [idProp, quizModelProp]);
  React.useEffect(resetStateValues, [quizRecord]);
  const validations = {
    difficulty: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          difficulty,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Quiz.copyOf(quizRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "QuizUpdateForm")}
      {...rest}
    >
      <SelectField
        label="Difficulty"
        placeholder="Please select an option"
        isDisabled={false}
        value={difficulty}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              difficulty: value,
            };
            const result = onChange(modelFields);
            value = result?.difficulty ?? value;
          }
          if (errors.difficulty?.hasError) {
            runValidationTasks("difficulty", value);
          }
          setDifficulty(value);
        }}
        onBlur={() => runValidationTasks("difficulty", difficulty)}
        errorMessage={errors.difficulty?.errorMessage}
        hasError={errors.difficulty?.hasError}
        {...getOverrideProps(overrides, "difficulty")}
      >
        <option
          children="Easy"
          value="EASY"
          {...getOverrideProps(overrides, "difficultyoption0")}
        ></option>
        <option
          children="Medium"
          value="MEDIUM"
          {...getOverrideProps(overrides, "difficultyoption1")}
        ></option>
        <option
          children="Hard"
          value="HARD"
          {...getOverrideProps(overrides, "difficultyoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || quizModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || quizModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
