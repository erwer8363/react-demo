import React, {useState} from 'react';
import {TabBar} from "antd-mobile";

import cookbook from '@/assets/images/cookbook.png'
import cookbookActive from '@/assets/images/cookbook-active.png'

import menu from '@assets/images/menu.png'
import menuActive from '@assets/images/menu-active.png'

import category from '@assets/images/location.png'
import categoryActive from '@assets/images/location-active.png'

import more from '@assets/images/more.png'
import moreActive from '@assets/images/more-active.png'

import CookBook from "@/home/cookbook";

const Home = () => {
    const [selectedTab, setSelectTab] = useState('cookbook')
    const [hidden, setHidden] = useState(false)
    return (
        <div style={{position: 'fixed', height: '100%', width: '100%', top: 0}}>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#000"
                barTintColor="white"
                hidden={hidden}
            >
                <TabBar.Item
                    title="美食大全"
                    key="cookbook"
                    icon={<div style={{
                        width: '26px',
                        height: '26px',
                        background: `url(${cookbook}) center center /  26px 26px no-repeat`
                    }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '26px',
                        height: '26px',
                        background: `url(${cookbookActive}) center center /  26px 26px no-repeat`
                    }}
                    />
                    }
                    selected={selectedTab === 'cookbook'}
                    onPress={() => setSelectTab('cookbook')}
                >
                    <CookBook/>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${menu}) center center /  21px 21px no-repeat`
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${menuActive}) center center /  21px 21px no-repeat`
                        }}
                        />
                    }
                    title="菜单"
                    key="menu"
                    selected={selectedTab === 'menu'}
                    onPress={() => setSelectTab('menu')}
                >
                    <div>category</div>
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${category}) center center /  21px 21px no-repeat`
                        }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${categoryActive}) center center /  21px 21px no-repeat`
                        }}
                        />
                    }
                    title="美食地图"
                    key="category"
                    selected={selectedTab === 'category'}
                    onPress={() => setSelectTab('category')}
                >
                    <div>more</div>
                </TabBar.Item>
                <TabBar.Item
                    icon={{uri: more}}
                    selectedIcon={{uri: moreActive}}
                    title="更多"
                    key="more"
                    selected={selectedTab === 'more'}
                    onPress={() => setSelectTab('more')}
                >
                    <div>more</div>
                </TabBar.Item>
            </TabBar>
        </div>
    )
}
export default Home
