import React from 'react'
import { Link } from 'react-router-dom';
import ArticleBox from '../../Components/ArticleBox/ArticleBox';

import './articles.css'

const Articles = () => {
    return (
        <div class="col-8 content px-0">
            <div class="content__wrapper d-flex flex-column align-content-between">
                <ul className="content__tabs">
                    <li className="content__tab">
                        <Link to="/users" className="content__tab-link">
                            <span className="fa fa-user"></span>
                            کاربران
                        </Link>
                    </li>
                    <li className="content__tab">
                        <Link to="/info" className="content__tab-link">
                            <span className="fa fa-book"></span>
                            اطلاعات
                        </Link>
                    </li>
                    <li className="content__tab">
                        <Link to="/courses" className="content__tab-link">
                            <span className="fa fa-store"></span>
                            دوره‌ها
                        </Link>
                    </li>

                    <li className="content__tab">
                        <Link to="/articles" className="content__tab-link">
                            <span className="fa fa-newspaper"></span>
                            وبلاگ
                        </Link>
                    </li>
                </ul>

                <div class="articles">
                    <div class="articles__list">
                        <ArticleBox />
                        <ArticleBox />
                    </div>
                </div>

                <div class="new-article">
                    <button
                        class="btn-custome btn-custome__blue"
                        data-bs-toggle="modal"
                        data-bs-target="#new-article"
                        id="btn-modal-new-article"
                    >
                        افزودن مقاله جدید
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Articles