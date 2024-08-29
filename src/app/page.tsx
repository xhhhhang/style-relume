'use client'

import React from 'react';
import { motion } from 'framer-motion';

import { Navbar13 } from '@/components/navbar-13';
import { Header30 } from '@/components/header-30';
import { Layout366 } from '@/components/layout-366';
import { Layout415 } from '@/components/layout-415';
import { Pricing17 } from '@/components/pricing-17';
import { Contact5 } from '@/components/contact-5';
import { Footer4 } from '@/components/footer-4';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  console.log('Home component rendered');
  return (
    <div>
      <header className="fixed top-0 left-0 right-0 z-10">
        <Navbar13 
          logo={{
            url: "#",
            src: "/asset/简称/促进会LOGO-横式简称.png",
            alt: "零碳协同创新促进会 Logo"
          }}
          navLinks={[
            { url: "#about", title: "关于我们" },
            { url: "#services", title: "服务内容" },
            { url: "#partners", title: "合作伙伴" },
            { url: "#contact", title: "联系我们" }
          ]}
          button={{
            title: "加入我们",
            size: "sm"
          }}
        />
      </header>
      <main>
        <div className="h-screen">
          <Header30 
            heading="零碳协同创新促进会"
            description="立足西南、辐射全国，打造碳中和共融生态，成为双碳实践服务的示范平台"
            buttons={[
              { title: "了解更多", variant: "primary" },
              { title: "联系我们", variant: "secondary-alt" }
            ]}
            image={{
              src: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
              alt: "可持续发展背景图"
            }}
          />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Layout366 
            tagline="我们的服务"
            heading="全方位的零碳解决方案"
            description="我们提供从教育培训到技术咨询的全面服务，助力企业和组织实现可持续发展目标。"
            cardsSmall={[
              {
                tagline: "教育培训",
                image: {
                  src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
                  alt: "教育培训"
                },
                heading: "可持续发展课程",
                description: "提供联合国训练研究所和剑桥大学等官方认证的可持续课程和研学体系。",
                button: {
                  title: "了解详情",
                  variant: "link",
                  size: "link",
                  iconRight: true
                }
              },
              {
                tagline: "技术咨询",
                image: {
                  src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
                  alt: "技术咨询"
                },
                heading: "零碳技术解决方案",
                description: "提供ESG专项报告、碳资产开发等服务，助力企业实现零碳转型。",
                button: {
                  title: "咨询服务",
                  variant: "link",
                  size: "link",
                  iconRight: true
                }
              }
            ]}
            cardsBig={[
              {
                tagline: "创新模式",
                image: {
                  src: "https://images.unsplash.com/photo-1497366216548-37526070297c",
                  alt: "创新模式"
                },
                heading: "云碳大脑系统",
                description: "结合云碳平台进行排碳度量、减碳服务和碳运营，打通大社区'零碳'实现路径。",
                buttons: [
                  { title: "了解更多", variant: "secondary" },
                  {
                    title: "申请演示",
                    variant: "link",
                    size: "link",
                    iconRight: true
                  }
                ]
              }
            ]}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Layout415 
            tagline="我们的优势"
            heading="为什么选择我们"
            description="零碳协同创新促进会依托深圳可持续发展研究院的双碳平台，结合可复制、可落地、可推广的双碳建设经验，为您提供全面的可持续发展能力。"
            buttons={[
              { title: "联系我们", variant: "secondary" },
              {
                title: "了解更多",
                variant: "link",
                size: "link",
                iconRight: true
              }
            ]}
            featureSections={[
              {
                icon: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "人才培养图标"
                },
                title: "碳中和人才培养",
                description: "提供专业的可持续发展课程和培训，培养行业所需的高素质人才。"
              },
              {
                icon: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "国际交流图标"
                },
                title: "国际交流",
                description: "促进国内外双碳领域的交流合作，引进先进理念和技术。"
              },
              {
                icon: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "技术研发图标"
                },
                title: "先进技术研发升级",
                description: "持续推动零碳技术的研发和升级，为企业提供最新的解决方案。"
              },
              {
                icon: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "成果转化图标"
                },
                title: "产业成果转化",
                description: "推动零碳技术和解决方案在实际产业中的应用和转化。"
              }
            ]}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Pricing17 
            tagline="会员服务"
            heading="加入我们，共创零碳未来"
            description="选择适合您的会员计划，享受全面的零碳服务和支持。"
            defaultTabValue="yearly"
            tabs={[
              {
                value: "yearly",
                tabName: "年度会员",
                plans: [
                  {
                    icon: {
                      src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                      alt: "基础会员图标"
                    },
                    planName: "基础会员",
                    description: "适合小型企业和初创公司",
                    price: 10000,
                    discount: "较月付节省20%",
                    features: [
                      "基础碳排放评估",
                      "每季度一次咨询服务",
                      "参与年度零碳论坛",
                      "获取基础培训资料",
                      "线上社区支持"
                    ],
                    button: { title: "立即加入" }
                  },
                  {
                    icon: {
                      src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                      alt: "高级会员图标"
                    },
                    planName: "高级会员",
                    description: "适合中大型企业和机构",
                    price: 50000,
                    discount: "较月付节省25%",
                    features: [
                      "全面碳排放评估和管理",
                      "每月一次深度咨询服务",
                      "优先参与所有活动和论坛",
                      "定制化培训方案",
                      "24/7专属客户支持",
                      "优先使用最新技术和解决方案",
                      "年度可持续发展报告支持"
                    ],
                    button: { title: "联系我们" }
                  }
                ]
              }
            ]}
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <Contact5 
            tagline="联系我们"
            heading="携手共创零碳未来"
            description="无论您有任何问题或需求，我们都随时欢迎您的咨询。让我们一起为可持续发展贡献力量。"
            email="info@zerocarbonassociation.org"
            phone="+86 123 4567 8900"
            address="四川省成都市高新区天府大道1234号"
            button={{ title: "发送消息" }}
          />
        </motion.div>
        <Footer4 
          logo={{
            url: "#",
            src: "/asset/简称/促进会LOGO-横式简称.png",
            alt: "零碳协同创新促进会 Logo"
          }}
          columnLinks={[
            {
              links: [
                { title: "关于我们", url: "#about" },
                { title: "服务内容", url: "#services" },
                { title: "合作伙伴", url: "#partners" },
                { title: "新闻动态", url: "#news" },
                { title: "加入我们", url: "#join" }
              ]
            }
          ]}
          socialMediaLinks={[
            { url: "#", icon: "facebook" },
            { url: "#", icon: "twitter" },
            { url: "#", icon: "linkedin" },
            { url: "#", icon: "instagram" }
          ]}
          footerText="© 2024 零碳协同创新促进会. 保留所有权利。"
          footerLinks={[
            { title: "隐私政策", url: "#privacy" },
            { title: "服务条款", url: "#terms" },
            { title: "Cookie 设置", url: "#cookies" }
          ]}
        />
      </main>
    </div>
  );
}
