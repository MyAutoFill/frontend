import { Button, Checkbox, Form, Input } from 'antd';

export default function AccountManagment() {

  const exist = localStorage.getItem("currentUser");
  const uuid = JSON.parse(exist).uuid;
  if (uuid == undefined || uuid == null || uuid === '') {
    history.push('/auto_fill/user/login')
  }

  return (
    <>
      <div style={{ height: 1200 }}>
        <div style={{ textAlign: 'center', margin: 'auto', justifyItems: 'center'}}>
          <Form
            name="basic"
            style={{
              width: 400,
              marginTop: 100
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="账号"
              name="账号"
              rules={[
                {
                  required: true,
                  message: '请输入您的账号！',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="密码"
              rules={[
                {
                  required: true,
                  message: '请输入您的密码！',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item label={null} style={{alignItems: 'center'}}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}