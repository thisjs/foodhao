//index.js
//获取应用实例
const app = getApp()

Page({
    data:{
      slideUp: false,
        slideUpClass:'',
        goodsList:[
            {
                goodsId:123,
                img: './testImg/timg.jpg',
                info:'杂粮煎饼：白面、小米面、豆面制作',
                newPrice: 14.5,
                oldPrice: 24,
                isSelect: false,
                selectNum: 0
            },
            {
                goodsId:456,
                img: './testImg/timg.jpg',
                info:'杂粮煎饼：白面、小米面、豆面制作 +薄脆+肠',
                newPrice: 14.5,
                oldPrice: 24,
                isSelect: false,
                selectNum: 0
            }
        ],

        cartGoodsNum:0,
        cartPrice:0,
        addedList:[]
    },
    // 点击购物车图标弹出列表
    tapCart(){
        if(this.data.slideUp){
            this.setData({
                slideUp: false,
                slideUpClass:''
            });
        }else{
            if(app.globalData.addedList.length === 0) return;
            this.setData({
                slideUp: true,
                slideUpClass:'slide-up'
            });
        }
    },
    // 添加购物车
    addGoodsAction(event){
        const goodsId = event.currentTarget.dataset.goodsid;

        // 检查已添加
        const record = app.globalData.addedList.find(p => p.goodsId == goodsId);

        // 已添加商品池没有记录
        if(!record){
            // 找到商品池商品
            const targetGoods = this.data.goodsList.find((p) => {
                // 标识已添加
                if(p.goodsId === goodsId){
                    p.isSelect = true;
                    p.selectNum = 1
                }
                return p.goodsId === goodsId
            });
            // 商品池目标商品添加到已添加商品池
            app.globalData.addedList.push(targetGoods)
        }
        // 有记录
        else{
            app.globalData.addedList.forEach(p => {
                if(p.goodsId === goodsId){
                    p.selectNum += 1;
                }
            });
            /*this.setData({
                addedList:this.data.addedList
            });*/
        }
        // 重新存储数据，商品页面数据
        this.setData({
            goodsList:this.data.goodsList
        });

        this.countAddedData();
    },

    // 购物车列表点击加减按钮
    changeCart(event){
        const goodsId = event.currentTarget.dataset.goodsid;
        const type = event.currentTarget.dataset.type;
        app.globalData.addedList.forEach((p, i) => {
            if(p.goodsId === goodsId){
                if(type === 'reduce'){
                    p.selectNum -= 1;
                    if(p.selectNum === 0){
                        this.data.goodsList.find(goods => goods.goodsId === goodsId).isSelect = false;

                        app.globalData.addedList.splice(i,1);
                    }
                }else if(type === 'add'){
                    p.selectNum += 1;
                }
            }
        });
        /*this.setData({
            addedList:this.data.addedList
        });*/

        this.setData({
            goodsList: this.data.goodsList
        })
        console.info(this.data.goodsList)
        this.countAddedData();
    },
    countAddedData(){
        // 更新购物车里商品数量数据
        let selectNum = 0;
        let selectPrice = 0;
        app.globalData.addedList.forEach(item => {
            selectNum += item.selectNum;
            selectPrice += item.newPrice * item.selectNum;
        });
        this.setData({
            cartGoodsNum:selectNum,
            cartPrice: selectPrice,
            addedList: app.globalData.addedList
        })

        if(app.globalData.addedList.length === 0){
            this.setData({
                cartGoodsNum:0,
                cartPrice: 0,
                slideUp: false,
                slideUpClass: ''
            });
        }
    },
    toOrder(){
        if(app.globalData.addedList.length){
            console.info(1)
            wx.navigateTo({
                //目的页面地址
                url: '/pages/order/index',
                success: function(res){

                }
            })
        }
    }
})
