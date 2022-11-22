import React from 'react';
import './Service.css';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFlip, Navigation, Pagination } from "swiper";


const PageService = () => {
    return (
        <div className='services'>
            <div className="container-fluid sec1 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 animate hook4">
                            <div className="swiper mySwiper2">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"flip"}
                                    grabCursor={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFlip, Navigation, Pagination]}
                                    className="mySwiper service"

                                >
                                    <SwiperSlide>
                                        <img src="./../../assets/industries (1).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/industries (2).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/industries (3).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/industries (4).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/industries (5).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/industries (6).png" alt="robot" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-md-6 animate hook1 box-shadow">
                            <div className="content">
                                <h3>Robots in Different Industries</h3>
                                <p className="py-3">
                                    Throughout the pandemic, robots have been used to sanitise and
                                    disinfect rooms using UV light. Before that, robots have been
                                    used to deliver goods between departments in large business
                                    spaces, such as factories, warehouses, or even hospitals.
                                    However, the pandemic has undoubtedly accelerated the progress
                                    of robotics and its role in society because of there flexibility
                                    across a wide array of industries. Providing convenience and
                                    accessibility otherwise unheard of before. So just how do robots
                                    contribute to making a better society?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid sec2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 animate hook1 box-shadow">
                            <div className="content">
                                <h3>RETAIL STORE</h3>
                                <p>
                                    In retail, automation is spurred by the growing need for a more
                                    efficient workflow in product management. Robots in retail
                                    stores can perform many tasks that would otherwise need more
                                    than one person to complete. A robot can simultaneously serve as
                                    a customer service, salesperson, and real-time inventory
                                    management specialist. For instance, supermarkets can operate
                                    robots with visual recognition technology that can know when a
                                    shelf needs to be restocked, or customers can ask the robot for
                                    availability of a product they want.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 animate hook4">
                            <div className="swiper mySwiper2">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"flip"}
                                    grabCursor={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFlip, Navigation, Pagination]}
                                    className="mySwiper service"

                                >
                                    <SwiperSlide>
                                        <img src="./../../assets/aitech (2).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/autoxing.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/buddy.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/coach.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/disinfect.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/ipal.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/library.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/nao.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/orionstar (2).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/pepper.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/reeman snail.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/retail_guide.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/samsung.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/stockbot.png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/zenbo.png" alt="img" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-md-6 animate hook2 box-shadow">
                            <div className="content">
                                <h3>CUSTOMER SERVICE</h3>
                                <p>
                                    To combat under-staffing, the customer service industry is
                                    shifting towards a remote-based infrastructure that allows its
                                    operators to serve multiple branches simultaneously. Shoppers
                                    entering a shopping mall can be greeted by a service robot
                                    capable of providing directions, collecting feedback, suggest
                                    stores to visit. As a help desk, these robot acts as a mobile
                                    information booths that may assist shoppers throughout the mall.
                                    Service robots reduce the need of human contact or close
                                    proximity is a pandemics, such as Covid-19.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 animate hook4">
                            <div className="swiper mySwiper2">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"flip"}
                                    grabCursor={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFlip, Navigation, Pagination]}
                                    className="mySwiper service"

                                >
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (1).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (2).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (3).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (4).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (5).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (6).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (7).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (8).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (9).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (10).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (11).png" alt="customer" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/customer/customer (12).png" alt="customer" />
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 animate hook1 box-shadow">
                            <div className="content">
                                <h3>FOODS & BEVERAGES</h3>
                                <p>
                                    Today, the biggest challenge facing the F&B industry is the
                                    worker shortage. Many restaurants, cafes, and fast food shops
                                    are severely understaffed. To solve this issue, businesses are
                                    turning to solutions beyond human resources. More and more
                                    restaurants are utilising robots to take their customers orders
                                    and serve their customers' food and drinks. When not in use, the
                                    robots can monitor their surroundings. They can sweep and mop
                                    the floors and clean up spilled beverages.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 animate hook4">
                            <div className="swiper mySwiper2">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"flip"}
                                    grabCursor={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFlip, Navigation, Pagination]}
                                    className="mySwiper service"

                                >
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (13).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (1).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (2).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (3).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (4).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (5).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (6).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (7).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (8).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (9).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (10).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (11).png" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/foodRobots/food (12).png" alt="img" />
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-md-6 animate hook1 box-shadow">
                            <div className="content">
                                <h3>Robots at Home</h3>
                                <p>
                                    Today, the biggest challenge facing the F&B industry is the
                                    worker shortage. Many restaurants, cafes, and fast food shops
                                    are severely understaffed. To solve this issue, businesses are
                                    turning to solutions beyond human resources. More and more
                                    restaurants are utilising robots to take their customers orders
                                    and serve their customers' food and drinks. When not in use, the
                                    robots can monitor their surroundings. They can sweep and mop
                                    the floors and clean up spilled beverages.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 animate hook4">
                            <div className="swiper mySwiper2">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"flip"}
                                    grabCursor={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFlip, Navigation, Pagination]}
                                    className="mySwiper service"

                                >
                                    <SwiperSlide>
                                        <img src="./../../assets/vaccum.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/unitree.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/zenbo (2).jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/pudi d1.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/powerray.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/moxie.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/misa.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/lynx.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/ipal.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/husq.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/eilik.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/csjbot2.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/buddy.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/AutoXing.jpg" alt="img" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/aitech.jpg" alt="img" />
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 animate hook2 box-shadow">
                            <div className="content">
                                <h3>Child Care</h3>
                                <p>
                                    Robots are also capable of monitor young children. From general
                                    reminders, to baby monitoring, and even some bed time stories, a
                                    robot is your second eyes and entertainer. Not only can it serve
                                    as a good introduction to IT, but young kids also find robots
                                    entertaining. In addition, they are capable of detecting
                                    symptoms early on, allowing for quicker medical assistance.
                                    Similar to robots for aged care, domestic robots allow access to
                                    remote health services in cases of emergency.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 animate hook4">
                            <div className="swiper mySwiper2">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"flip"}
                                    grabCursor={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFlip, Navigation, Pagination]}
                                    className="mySwiper service"

                                >
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child1.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child2.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child3.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child4.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child5.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child6.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child7.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child8.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child9.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child10.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child11.png" alt="child" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/child/child12.png" alt="child" />
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-md-6 animate hook1 box-shadow">
                            <div className="content">
                                <h3>Telepresence</h3>
                                <p>
                                    Telepresence robots provide remote care for your loved ones. The
                                    companionship they provide is essential, as it helps combat
                                    loneliness. Telepresence robots act as stand-ins for operators
                                    who need to remotely engage with customers. Businesses that run
                                    on a connected network, like banks, can utilise telepresence
                                    robots to enable their operators to work remotely. As a result,
                                    banks can cut costs by having branches that require little to no
                                    staff, where clients can come and instead interact with a staff
                                    member operating a telepresence robot.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 animate hook4">
                            <div className="swiper mySwiper2">
                                <Swiper
                                    spaceBetween={30}
                                    effect={"flip"}
                                    grabCursor={true}
                                    navigation={true}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[EffectFlip, Navigation, Pagination]}
                                    className="mySwiper service"

                                >
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (1).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (2).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (3).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (4).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (5).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (6).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (7).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (8).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (9).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (10).png" alt="robot" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./../../assets/Telepresence/tele (11).png" alt="robot" />
                                    </SwiperSlide>
                                </Swiper>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageService;