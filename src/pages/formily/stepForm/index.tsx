import { FormStep, FormItem, Input, FormButtonGroup } from '@formily/antd';
import { createForm } from '@formily/core';
import { FormProvider, FormConsumer, createSchemaField } from '@formily/react';
import { Button } from 'antd';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormStep,
    Input,
  },
});

const form = createForm();
const formStep = FormStep.createFormStep?.();

export default () => {
  return (
    <FormProvider form={form}>
      <SchemaField>
        <SchemaField.Void
          x-component="FormStep"
          x-component-props={{ formStep }}
        >
          <SchemaField.Void
            x-component="FormStep.StepPane"
            x-component-props={{ title: '第一步' }}
          >
            <SchemaField.String
              name="aaa"
              x-decorator="FormItem"
              required
              x-component="Input"
            />
          </SchemaField.Void>
          <SchemaField.Void
            x-component="FormStep.StepPane"
            x-component-props={{ title: '第二步' }}
          >
            <SchemaField.String
              name="bbb"
              x-decorator="FormItem"
              required
              x-component="Input"
            />
          </SchemaField.Void>
          <SchemaField.Void
            type="void"
            x-component="FormStep.StepPane"
            x-component-props={{ title: '第三步' }}
          >
            <SchemaField.String
              name="ccc"
              x-decorator="FormItem"
              required
              x-component="Input"
            />
          </SchemaField.Void>
        </SchemaField.Void>
      </SchemaField>
      <FormConsumer>
        {() => (
          <FormButtonGroup>
            <Button
              disabled={!formStep.allowBack}
              onClick={() => {
                formStep.back();
              }}
            >
              上一步
            </Button>
            <Button
              disabled={!formStep.allowNext}
              onClick={() => {
                formStep.next();
              }}
            >
              下一步
            </Button>
            <Button
              disabled={formStep.allowNext}
              onClick={() => {
                formStep.submit(console.log);
              }}
            >
              提交
            </Button>
          </FormButtonGroup>
        )}
      </FormConsumer>
    </FormProvider>
  );
};
