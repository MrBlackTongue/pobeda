import React  from 'react';
import {
  Button,
  Form,
  Input,
  Select,
} from 'antd';
import TextArea from "antd/es/input/TextArea";


const NewAd = () => {
  return (
    <>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="vertical"
      style={{marginLeft: '40rem', width: 500}}
      // initialValues={{ size: componentSize }}
      // onValuesChange={onFormLayoutChange}
      // size={componentSize as SizeType}
    >
      <Form.Item label="Ваше имя">
        <Input />
      </Form.Item>
      <Form.Item label="Город">
        <Select>
          <Select.Option value="Москва">Москва</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Название проекта">
        <Input />
      </Form.Item>
      <Form.Item label="Описание проекта">
        <TextArea/>
      </Form.Item>
      <Form.Item label="Кто нужен">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Создать</Button>
      </Form.Item>
    </Form>
    </>
  )
}

export default NewAd;