import 'rc-banner-anim/assets/index.css';
import { Menu, ConfigProvider } from 'antd';

export default function CompanyInfo() {

    return (
        <>
            <div style={{ height: '100%' }}>
                <div className="mybanner page-wrapper" style={{ overflow: 'auto', width: '100%', overflowY: 'auto' }}>
                    <div className="page" style={{ maxWidth: 2000, height: 1250 }}>
                        <div style={{ display: 'flex', margin: '70px auto 40px' }}>
                            <div className="logo" />
                            <div>
                                <ConfigProvider
                                theme={{
                                    components: {
                                    Menu: {
                                        horizontalItemSelectedColor: 'rgba(255, 255, 255, 0.6)',
                                    },
                                    },
                                }}
                                >
                                <Menu mode="horizontal" style={{background: 'rgba(0, 0, 0, 0)', border: 0, lineHeight: 2.8}}>
                                    <Menu.Item key="home">
                                    <a href='/auto_fill/' style={{fontSize: 25, color: 'white', fontWeight: 400}}>首页</a>
                                    </Menu.Item>
                                    <Menu.Item key="input">
                                    <a href='/auto_fill/input' style={{fontSize: 25, color: 'white', fontWeight: 400}}>报表报送</a>
                                    </Menu.Item>
                                    <Menu.Item key="info">
                                    <a href='/auto_fill/company_info' style={{fontSize: 25, color: 'white', fontWeight: 400}}>企业基本信息</a>
                                    </Menu.Item>
                                    <Menu.Item key="message_center">
                                    <a href='/auto_fill/message_center' style={{fontSize: 25, color: 'white', fontWeight: 400}}>消息中心</a>
                                    </Menu.Item>
                                    <Menu.Item key="logout">
                                    <a onClick={() => {logout()}} style={{fontSize: 25, color: 'white', fontWeight: 400}}>退出登录</a>
                                    </Menu.Item>
                                </Menu>
                                </ConfigProvider>
                            </div>
                        </div>
                        <div style={{ padding: 50, height: 1050 }} class="mybanner-anim">
                            <body style={{height: 950, overflowY: 'scroll' }}>
                                <h1>
                                    <a>
                                        <span>
                                            第1章 客户端启动
                                        </span>
                                    </a>
                                </h1>
                                <p>
                                    <span>
                                        1．下载客户端：
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        在浏览器中访问系统地址
                                        <a href="https://xcyb.weihai.cn/auto_fill/">
                                            https://xcyb.weihai.cn/auto_fill/
                                        </a>
                                        ，并在进入后点击页眉处的填报客户端下载或登录页面的客户端下载按钮处点击下载客户端。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image002.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．客户端下载完成后，通过浏览器默认下载路径找到客户端；随后双击client.exe文件；
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image004.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        双击后按指引进入安装程序，安装完成后可选择通过双击图标运行
                                    </span>
                                </p>
                                <p>
                                    <b>
                                        <span>
                                            注：只有通过本地报送助手客户端运行时报送核心功能才可用。
                                        </span>
                                    </b>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image006.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image008.jpg" />
                                    </span>
                                </p>
                                <p>
                                    3．客户端必备：Chrome 浏览器。
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第2章 登录系统
                                        </span>
                                    </a>
                                </h1>
                                <p>
                                    <b>
                                        <span>
                                            注：如果您是首次使用，系统会自动要求您填写所有企业基本信息必填项，若未登录，点击首页任意按钮后跳转至登录页面。
                                        </span>
                                    </b>
                                </p>
                                <p>
                                    <a>
                                        <b>
                                            <span>
                                                操作流程
                                            </span>
                                        </b>
                                    </a>
                                </p>
                                <p>
                                    <span>
                                        1．点击企业信息按钮后进行登录操作；
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image010.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．点击通过山东省统一身份认证平台登录后跳转至认证平台，填写正确信息后点击登录按钮完成登录。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image012.jpg" />
                                    </span>
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第3章 企业基本信息
                                        </span>
                                    </a>
                                </h1>
                                <p>
                                    <span>
                                        通过直接点击首页中的企业信息按钮和页眉中的企业基本信息按钮进入到企业基本信息中。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image014.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            3.1 操作流程
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．进入企业基本信息填写页面后，在左侧目录中选择想要填写的表格并点击对应表格名称前往。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image016.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．进入对应表格页面后，在右侧数据页的空格中填写正确的数据或信息。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image018.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．所有数据填充完成后，如果有其他平台报表需要填写点击保存数据后，前几页眉报表报送按钮前往报表填写页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image020.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image022.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            3.2 企业信息同步功能
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1. 点击列表下的“企业基本信息数据同步”按钮，点击后通过后台接口获取数据。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image024.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2. 点击后弹出弹窗显示新老数据对比，确认数据无误后点击确认，确认后新数据将会全量替换旧数据。
                                        <img src="./images/manual/image026.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <span>
                                        3.3 数据规范
                                    </span>
                                </h2>
                                <p>
                                    <span>
                                        1．数据填写区域部分数据存在必填项校验，若该项为必填项则必须在填写完成并保存后才可进入其他页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image028.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．非必填项若不涉及可不填，未填写的数据将不会与其他报表填报页面进行共享，实际填写时也不会对报表数据产生影响。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．部分数据项根据其实际业务属性需要区分单位，填写时注意单位转换；联动数据会根据不同单位自动进行转换。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image030.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            3.4 信息
                                        </span>
                                    </a>
                                    <span>
                                        填报
                                    </span>
                                </h2>
                                <h3>
                                    <span>
                                        3.4.1 企业基本信息
                                    </span>
                                </h3>
                                <p>
                                    <span>
                                        地址：
                                        <a href="https://xcyb.weihai.cn/auto_fill/company_info">
                                            <span>
                                                https://xcyb.weihai.cn/auto_fill/company_info
                                            </span>
                                        </a>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        是否必填：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        首次登录填写：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image032.jpg" />
                                    </span>
                                </p>
                                <h3>
                                    <span>
                                        3.4.2 企业参保信息
                                    </span>
                                </h3>
                                <p>
                                    <span>
                                        地址：
                                        <a href="https://xcyb.weihai.cn/auto_fill/company_info">
                                            <span>
                                                https://xcyb.weihai.cn/auto_fill/company_info
                                            </span>
                                        </a>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        是否必填：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        首次登录填写：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image034.jpg" />
                                    </span>
                                </p>
                                <h3>
                                    <span>
                                        3.4.3 企业从业人员信息
                                    </span>
                                </h3>
                                <p>
                                    <span>
                                        地址：
                                        <a href="https://xcyb.weihai.cn/auto_fill/company_info">
                                            <span>
                                                https://xcyb.weihai.cn/auto_fill/company_info
                                            </span>
                                        </a>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        是否必填：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        首次登录填写：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        企业从业人员信息为每月填写项，当时间到了每月
                                        1
                                        号数据会被保存至前一个月，通过选择不同月份查看数据。进入新月份后数据栏为空，点击数据迁移按钮后将上个月的数据迁移至新月份，手动填写保存的数据将不会被覆盖。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image036.jpg" />
                                    </span>
                                </p>
                                <h3>
                                    <span>
                                        3.4.4 企业经济状况信息
                                    </span>
                                </h3>
                                <p>
                                    <span>
                                        地址：
                                        <a href="https://xcyb.weihai.cn/auto_fill/company_info">
                                            <span>
                                                https://xcyb.weihai.cn/auto_fill/company_info
                                            </span>
                                        </a>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        是否必填：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        首次登录填写：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        企业经济状况信息为每月填写项，当时间到了每月
                                        1
                                        号数据会被保存至前一个月，通过选择不同月份查看数据。进入新月份后数据栏为空，点击数据迁移按钮后将上个月的数据迁移至新月份，手动填写保存的数据将不会被覆盖。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image038.jpg" />
                                    </span>
                                </p>
                                <h3>
                                    <span>
                                        3.4.5 企业研究开发及相关信息
                                    </span>
                                </h3>
                                <p>
                                    <span>
                                        地址：
                                        <a href="https://xcyb.weihai.cn/auto_fill/company_info">
                                            <span>
                                                https://xcyb.weihai.cn/auto_fill/company_info
                                            </span>
                                        </a>
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        是否必填：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        首次登录填写：是
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        企业研究开发及相关信息为每月填写项，当时间到了每月
                                        1
                                        号数据会被保存至前一个月，通过选择不同月份查看数据。进入新月份后数据栏为空，点击数据迁移按钮后将上个月的数据迁移至新月份，手动填写保存的数据将不会被覆盖。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image040.jpg" />
                                    </span>
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第4章 人社局信息填报
                                        </span>
                                    </a>
                                </h1>
                                <h2>
                                    <a>
                                        <span>
                                            4.1 选择报表
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．通过在搜索框中输入“人社局”，并在搜索出的结果中选择对应的结果并点击，点击搜索结果后点击右侧立即前往即可直接前往信息填写页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image042.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．进入信息填写页面后，可通过左侧目录选择您想要填写的报表，随后在右侧进行报表部分开始填写信息。同时也可以选择不同月份进行历史数据查看。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image044.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．也可以通过点击首页页眉中的报表报送或首页中部的开始报送按钮开始报表信息填报流程。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image046.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        4．若选择此种方式，您会进入报表报送流程第一步“数据同步”，此处根据当前配置您可以选择上传对应的信息表格进行数据同步，若您已上传或无需上传可点击流程图中的信息填写、书签上的信息填写或页面上的下一步进入信息填写页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image048.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        5．信息填写完成后点击保存数据按钮，随后您可以通过点击流程图中的数据填报或右侧按钮中的直接填报跳转至信息填报页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image050.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        6．进入数据填报页面后，根据人社局具体表格归属的网站，点击页面中对应的卡片前往网站。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image052.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            4.2 报表指南
                                        </span>
                                    </a>
                                </h2>
                                <h3>
                                    <a>
                                        <span>
                                            4.2.1 单位就业登记
                                        </span>
                                    </a>
                                </h3>
                                <p>
                                    <span>
                                        1．点击山东省公共就业人才服务网上服务大厅，通过指定方式登录。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image054.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．在首页点击单位就业信息或点击公共就业。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image056.jpg" />
                                        <img src="./images/manual/image058.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．找到单位就业登记页面后点击控制台中的启动填充按钮，随后等待直到程序填充完毕。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image060.jpg" />
                                    </span>
                                </p>
                                <h3>
                                    <a>
                                        <span>
                                            4.2.2 企业稳岗扩岗专项支持计划
                                            -
                                        </span>
                                    </a>
                                    <span>
                                        以工代训补贴申报
                                    </span>
                                </h3>
                                <p>
                                    <span>

                                        1．点击公共就业。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image058.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>

                                        2．点击以工代训补贴查询中的办理按钮。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image062.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>

                                        3．进入以工代训业务模块后，点击控制台中的启动填充按钮等待程序填充完成。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image064.jpg" />
                                    </span>
                                </p>
                                <h3>
                                    <a>
                                        <span>
                                            4.2.3 单位信息维护
                                        </span>
                                    </a>
                                </h3>
                                <p>
                                    <span>

                                        1．点击威海市人力资源与社会保障局卡片，输入用户名密码后进入页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image066.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>

                                        2．进入页面后点击左侧单位信息变更。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image068.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>

                                        3．单位信息维护窗口出现后，点击控制台的启动填充开始填充数据，该表格数据量较大，填充时间预计两分钟左右。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image070.jpg" />
                                    </span>
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第5章
                                            <span>
                                            </span>
                                            科技局信息填报
                                        </span>
                                    </a>
                                </h1>
                                <h2>
                                    <a>
                                        <span>
                                            5.1选择报表
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．可以通过在搜索框中输入“科技局”，并在搜索出的结果中选择对应的结果并点击，点击搜索结果后点击右侧立即前往即可直接前往信息填写页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image072.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        1．进入信息填写页面后，可通过左侧目录选择您想要填写的报表，随后在右侧进行报表部分开始填写信息。同时也可以选择不同月份进行历史数据查看。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image074.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            5.2 填报指南
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        2．在数据填报页面点击火炬高技术产业开发中心，登录火炬平台并找到我的信息。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image076.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．点击修改法人信息后，点击控制台的启动填充按钮完成填充。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image078.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image080.jpg" />
                                    </span>
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第6章 税务局信息填报
                                        </span>
                                    </a>
                                </h1>
                                <h2>
                                    <a>
                                        <span>
                                            6.1 选择报表
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．可以通过在搜索框中输入“税务局”，并在搜索出的结果中选择对应的结果并点击，点击搜索结果后点击右侧立即前往即可直接前往信息填写页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image082.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．进入信息填写页面后，可通过左侧目录选择您想要填写的报表，随后在右侧进行报表部分开始填写信息。同时也可以选择不同月份进行历史数据查看。
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            6.2 填报指南
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．第一步点击对应按钮上传财务系统导出模板可完成数据快捷同步。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image084.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．数据同步完成后点击下一步或标签页进入信息填写页面，数据填写页面中填写完所有信息后，可以点击第三个页面进行填报预览，也可以直接进入最后一页。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image086.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．点击税务局卡片后前往税务局页面
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image088.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        4．登录税务局
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image090.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        5．进入季报，点击启动填报按钮完成填报，当前支持现金流量表、资产负债表、利润表。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image092.jpg" />
                                    </span>
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第7章 统计局信息填报
                                        </span>
                                    </a>
                                </h1>
                                <h2>
                                    <a>
                                        <span>
                                            7.1 选择报表
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．可以通过在搜索框中输入“统计局”，并在搜索出的结果中选择对应的结果并点击，点击搜索结果后点击右侧立即前往即可直接前往信息填写页面。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image094.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．进入信息填写页面后，可通过左侧目录选择您想要填写的报表，随后在右侧进行报表部分开始填写信息。同时也可以选择不同月份进行历史数据查看。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image096.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．点击山东省统计联网直报平台卡片。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image098.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            7.2 填报指南
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．登录统计云。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image100.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．选择要填报的表格。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image102.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．点击控制台中的启动填充按钮，程序会触发当前表单的模板生成，生成的模板会下载到控制台的下载文件中。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image104.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image106.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        4．点击导入模板，选择刚刚生成的模板，导入成功后完成填报。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image108.jpg" />
                                    </span>
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第8章 工信局信息填报
                                        </span>
                                    </a>
                                </h1>
                                <h2>
                                    <a>
                                        <span>
                                            8.1 选择报表
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．点击第四部数据填报后点击信息产业运行监测平台。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image110.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．随后弹出新浏览器页面并进入工信局登录页面，填写正确的账户密码后通过手机验证码进入工信局首页；选择要填报的表单。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image112.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            8.2 填报指南
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．进入要填报的表单后点击操作台的一键启动填充，随后触发下载，带有最新数据的
                                        Excel
                                        模板会被下载，点击操作台下载按钮可以找到最新下载的模板。随后点击表单页面的表单数据导入导出，点击导入
                                        Excel
                                        。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image114.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．点击导入
                                        Excel
                                        后，点击选择文件按钮选择最新模板；选择后点击上传文件完成文件上传；最后点击提交按钮完成数据填报。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image116.jpg" />
                                    </span>
                                </p>
                                <h1>
                                    <a>
                                        <span>
                                            第9章 国家企业信息公示系统信息填报
                                        </span>
                                    </a>
                                </h1>
                                <h2>
                                    <a>
                                        <span>
                                            9.1 选择报表
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．进入数据填报页面后，点击国家企业信用信息公示系统。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image118.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        2．进入系统后点击企业信息填报，并完成登录。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image120.jpg" />
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        3．进入后选择您想要填报的表单。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image122.jpg" />
                                    </span>
                                </p>
                                <h2>
                                    <a>
                                        <span>
                                            9.2 填报指南
                                        </span>
                                    </a>
                                </h2>
                                <p>
                                    <span>
                                        1．进入您想要填报的页面后点击一键启动填充，并等待填充完成。
                                    </span>
                                </p>
                                <p>
                                    <span>
                                        <img src="./images/manual/image124.jpg" />
                                    </span>
                                </p>
                            </body>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
