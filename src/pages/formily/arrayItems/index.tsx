import { createForm } from '@formily/core';
import { VoidField, Field, ArrayField, ObjectField } from '@formily/react';
import { useMemo } from 'react';
import { Form, FormItem, Select, Space, NumberPicker } from '@formily/antd';
import { Button } from 'antd';
import { map } from '@formily/shared';

export default () => {
  const form = useMemo(() => createForm(), []);

  return (
    <Form form={form}>
      <VoidField
        name="store1"
        title="系统盘"
        decorator={[
          FormItem,
          {
            asterisk: true,
            feedbackLayout: 'none',
          },
        ]}
        component={[Space]}
      >
        <Field
          name="store11"
          decorator={[
            FormItem,
            {
              wrapperWidth: '200px',
            },
          ]}
          component={[Select]}
          required
        />
        <Field
          name="store12"
          decorator={[
            FormItem,
            {
              addonAfter: 'GB',
            },
          ]}
          component={[NumberPicker]}
          required
        />
      </VoidField>
      <ArrayField name="store2" title="数据盘" decorator={[FormItem]}>
        {(field) => {
          return (
            <div>
              {field.value?.map((item, index) => (
                <div key={index}>
                  <ObjectField name={index}>
                    {(field2) =>
                      Object.keys({ a: 1, b: 2 }).map((key, j) => {
                        return (
                          <Field
                            key={`${key}${index}`}
                            name={`${key}`}
                            component={[NumberPicker]}
                            required
                          />
                        );
                      })
                    }
                  </ObjectField>
                  <Button
                    onClick={() => {
                      field.remove(index);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ))}

              <Button
                onClick={() => {
                  field.push({});
                  console.log(
                    form.getValuesIn('*'),
                    JSON.parse(JSON.stringify(form.getValuesIn('*'))),
                  );
                }}
              >
                add
              </Button>
            </div>
          );
        }}
      </ArrayField>
      <Button
        onClick={() => {
          console.log(
            form.getValuesIn('*'),
            JSON.parse(JSON.stringify(form.getValuesIn('*'))),
          );
        }}
      >
        add
      </Button>
    </Form>
  );
};
