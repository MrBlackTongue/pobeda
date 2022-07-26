import React from 'react';
import './ads.css'
import {
  Button, Card, Typography, Space,
} from 'antd';
import {ZoomInOutlined} from '@ant-design/icons';

const {Title} = Typography;


const Ads = () => {
  return (
    <div style={{marginLeft: '40rem'}}>
      <Card style={{width: 500, marginBottom: 10}}>
        <div>
          <div className='centerTitle'>
            <Title level={4} style={{marginBottom: '0'}}>Поиск картинок по названию</Title>
            <Space>
              <Button
                type='dashed'
                icon={<ZoomInOutlined/>}>
              </Button>
            </Space>
          </div>
          <p>
            Ищем людей на проект. Пишем бота на питоне. Нужен лингвист и дизайнер.
          </p>
        </div>
        <Button type='primary'>Откликнуться</Button>
      </Card>
      <Card style={{width: 500, marginBottom: 10}}>
        <div>
          <div className='centerTitle'>
            <Title level={4} style={{marginBottom: '0'}}>Поиск дешевых авиабилетов</Title>
            <Space>
              <Button
                type='dashed'
                icon={<ZoomInOutlined/>}>
              </Button>
            </Space>
          </div>
          <p>
            Проет большой, людей мало. Хотим сделать свой сайт по поиску дешевых авиабилетов.
            У нас в команде уже есть фронтенд, бекенд и дизайнер. Нам нужен проджект менеджен и девопс.
            От Админа и тестера мы тоже не откажемся. Кому стало интересно откликайтесь. Отвечу на любые вопросы.
          </p>
        </div>
        <Button type='primary'>Откликнуться</Button>
      </Card>
      <Card style={{width: 500, marginBottom: 10}}>
        <div>
          <div className='centerTitle'>
            <Title level={4} style={{marginBottom: '0'}}>Приложение на телефон для подбора имен ребенку</Title>
            <Space>
              <Button
                type='dashed'
                icon={<ZoomInOutlined/>}>
              </Button>
            </Space>
          </div>
          <p>
            Хочу сделать приложение, которое будет подсказывать имена для детей.
            Идея проста, если родителям сложно подобрать имя,
            приложение задаст несколько наводящих вопросо и предложит несколько вариантом.
            Пишу на котлине. Нужен каллиграф, хочу чтобы именя были написаны красиво.
          </p>
        </div>
        <Button type='primary'>Откликнуться</Button>
      </Card>
      <Card style={{width: 500, marginBottom: 10}}>
        <div>
          <div className='centerTitle'>
            <Title level={4} style={{marginBottom: '0'}}>Тетрис</Title>
            <Space>
              <Button
                type='dashed'
                icon={<ZoomInOutlined/>}>
              </Button>
            </Space>
          </div>
          <p>
            Срочно! Ищу опытного питониста, который поможет сделать мой школьный проект.
            Я хочу сделать тетрис чтобы был счет и чтобы все фигуры выпадали рандомного цвета.
          </p>
        </div>
        <Button type='primary'>Откликнуться</Button>
      </Card>
    </div>
  )
}

export default Ads;