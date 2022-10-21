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
                                        <img src="./service/industries (1).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/industries (2).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/industries (3).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/industries (4).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/industries (5).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/industries (6).png" alt='' />
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
                                        <img src="./service/aitech (2).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/autoxing.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/buddy.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/coach.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/disinfect.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/ipal.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/library.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/nao.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/orionstar (2).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/pepper.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/reeman snail.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/retail_guide.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/samsung.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/stockbot.png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/zenbo.png" alt='' />
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
                                        <img src="./service/customer (1).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (2).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (3).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (4).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (5).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (6).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (7).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (8).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (9).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (10).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (11).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/customer (12).png" alt='' />
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
                                        <img src="./service/food (13).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (1).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (2).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (3).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (4).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (5).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (6).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (7).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (8).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (9).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (10).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (11).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/food (12).png" alt='' />
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
                                        <img src="./service/vaccum.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/unitree.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/zenbo (2).jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/pudi d1.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/powerray.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/moxie.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/misa.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/lynx.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/ipal.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/husq.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/eilik.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/csjbot2.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/buddy.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/AutoXing.jpg" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/aitech.jpg" alt='' />
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
                                        <img src="./service/child (1).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (2).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (3).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (4).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (5).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (7).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (8).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (9).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (10).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (11).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (12).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/child (13).png" alt='' />
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
                                        <img src="./service/tele (1).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (2).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (3).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (4).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (5).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (6).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (7).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (8).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (9).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (10).png" alt='' />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src="./service/tele (11).png" alt='' />
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