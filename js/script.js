class Dialog {
    constructor() {
        this.init();
    }
    init() {
        this.title = '我是标题';
        this.content = '今天是美好的一天!'
        this.msgss = null;
        this.confirm = '确定';
        this.cancel = '取消';
        this.creationMock();
        this.message();
        this.creationTit();
        this.creationCon();
        this.creationBtn();
        this.creationcha();
        this.clickMock();
        this.popup();
        this.confirmk();
        this.cancelk();
    }
    creationMock() {
        let mock = document.createElement('div');
        let buttons = document.createElement('button');
        document.body.appendChild(mock);
        document.body.appendChild(buttons);
        mock.className = 'mock';
        buttons.className = 'buttons';
        buttons.innerHTML = '弹出';
    }
    message() {
        let msg = document.createElement('div');
        let mocks = document.getElementsByClassName('mock')[0];
        msg.className = 'msg';
        mocks.appendChild(msg);
    }
    creationTit() {
        let tit = document.createElement('div');
        this.msgss = document.getElementsByClassName('msg')[0];
        tit.className = 'tit';
        tit.innerHTML = this.title;
        this.msgss.appendChild(tit);
    }
    creationCon() {
        let content = document.createElement('div');
        this.msgss = document.getElementsByClassName('msg')[0];
        content.className = 'content';
        content.innerHTML = this.content;
        this.msgss.appendChild(content);
    }
    creationBtn() {
        let confirm = document.createElement('button');
        let cancel = document.createElement('button');
        confirm.className = 'confirm';
        cancel.className = 'cancel';
        confirm.innerHTML = this.confirm;
        cancel.innerHTML = this.cancel;
        this.msgss.appendChild(confirm);
        this.msgss.appendChild(cancel);
    }
    creationcha() {
        let cha = document.createElement('span');
        cha.className = 'cha';
        cha.innerHTML = '<i class="icon iconfont icon-cuo"></i>';
        this.msgss.appendChild(cha);
    }
    clickMock() {
        document.getElementsByClassName('cha')[0].addEventListener('click', () => {
            let mocks = document.getElementsByClassName('mock')[0];
            this.hide(mocks);
        })
    }
    popup() {
        document.getElementsByClassName('buttons')[0].addEventListener('click', () => {
            let mocks = document.getElementsByClassName('mock')[0];
            this.show(mocks);
        })
    }
    confirmk(){
         document.getElementsByClassName('confirm')[0].addEventListener('click', () => {
            let mocks = document.getElementsByClassName('mock')[0];
            this.hide(mocks);
        })
    }
     cancelk(){
         document.getElementsByClassName('cancel')[0].addEventListener('click', () => {
            let mocks = document.getElementsByClassName('mock')[0];
            this.hide(mocks);
        })
    }
    hide(dom) {
        dom.style.display = 'none';
    }
    show(dom) {
        dom.style.display = 'block';
    }
}
new Dialog()