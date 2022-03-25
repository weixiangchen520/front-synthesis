import React from 'react';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/react';
import { Form, FormItem, Input, NumberPicker } from '@formily/antd';

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    Input,
    FormItem,
    NumberPicker,
  },
});

export default () => (
  <Form form={form} labelCol={6} wrapperCol={10}>
    <SchemaField>
      <SchemaField.String
        name="required_1"
        title="必填"
        required
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="required_2"
        title="必填"
        x-validator={{ required: true }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="required_3"
        title="必填"
        x-validator={[{ required: true }]}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_1"
        title="最大值(>5报错)"
        maximum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_2"
        title="最大值(>5报错)"
        x-validator={{ maximum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_3"
        title="最大值(>5报错)"
        x-validator={[{ maximum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_4"
        title="最大值(>=5报错)"
        exclusiveMaximum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_5"
        title="最大值(>=5报错)"
        x-validator={{ exclusiveMaximum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="max_6"
        title="最大值(>=5报错)"
        x-validator={[{ exclusiveMaximum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.Number
        name="min_1"
        title="最小值(<5报错)"
        minimum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_2"
        title="最小值(<5报错)"
        x-validator={{ minimum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_3"
        title="最小值(<5报错)"
        x-validator={[{ minimum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_4"
        title="最小值(<=5报错)"
        exclusiveMinimum={5}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_5"
        title="最小值(<=5报错)"
        x-validator={{ exclusiveMinimum: 5 }}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
      <SchemaField.Number
        name="min_6"
        title="最小值(<=5报错)"
        x-validator={[{ exclusiveMinimum: 5 }]}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="length_1"
        title="长度为5"
        x-validator={{ len: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="length_2"
        title="长度为5"
        x-validator={[{ len: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="maxlength_1"
        title="最大长度为5"
        maxLength={5}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_2"
        title="最大长度为5"
        x-validator={{ max: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_3"
        title="最大长度为5"
        x-validator={[{ max: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="maxlength_4"
        title="最小长度为5"
        minLength={5}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_5"
        title="最小长度为5"
        x-validator={{ min: 5 }}
        x-component="Input"
        x-decorator="FormItem"
      />
      <SchemaField.String
        name="maxlength_6"
        title="最小长度为5"
        x-validator={[{ min: 5 }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="whitespace"
        title="排除纯空白字符"
        x-validator={[{ whitespace: true }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="enum"
        title="枚举匹配"
        x-validator={[{ enum: ['1', '2', '3'] }]}
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="const"
        title="常量匹配"
        const="123"
        x-component="Input"
        x-decorator="FormItem"
      />

      <SchemaField.String
        name="multipleOf"
        title="整除匹配"
        multipleOf={2}
        x-component="NumberPicker"
        x-decorator="FormItem"
      />
    </SchemaField>
  </Form>
);
