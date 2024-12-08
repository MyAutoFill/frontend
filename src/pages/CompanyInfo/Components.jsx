import React, { useContext } from 'react';
import 'rc-banner-anim/assets/index.css';
import { Button, ConfigProvider, Space } from 'antd';
import { CloudSyncOutlined } from '@ant-design/icons';
import { css } from '@emotion/css';

export default function SyncCompanyInfoButton(props) {
	const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
	const rootPrefixCls = getPrefixCls();
	const linearGradientButton = css`
	&.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
		border-width: 0;

		> span {
			position: relative;
		}

		&::before {
			content: '';
			background: linear-gradient(135deg, #6253e1, #04befe);
			position: absolute;
			inset: 0;
			opacity: 1;
			transition: all 0.3s;
			border-radius: inherit;
		}

		&:hover::before {
			opacity: 0;
		}
	}
	`;
	
	return <>
		<span             
			style={{
				fontSize: '22px'
			}}>点击按钮进行企业基本信息同步</span>
		<ConfigProvider
			button={{
				className: linearGradientButton,
			}}
		>
			<br />
				<Button 
					type="primary" 
					icon={<CloudSyncOutlined />} 
					autoInsertSpace 
					size='large' 
					style={{
						fontSize: '20px',
						marginTop: '20px'
					}}
					// htmlType='submit'
					// onClick={
					//   SaveSuccess
					// }
				>企业基本信息数据同步</Button>
		</ConfigProvider>
	</>
}