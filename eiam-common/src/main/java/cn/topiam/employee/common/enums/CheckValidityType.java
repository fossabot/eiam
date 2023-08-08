/*
 * eiam-common - Employee Identity and Access Management
 * Copyright © 2022-Present Jinan Yuanchuang Network Technology Co., Ltd. (support@topiam.cn)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package cn.topiam.employee.common.enums;

/**
 * 检查有效性类型
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2021/11/17 21:22
 */
public enum CheckValidityType {
                               /**
                                * 邮箱
                                */
                               EMAIL,
                               /**
                                * 手机号
                                */
                               PHONE,
                               /**
                                * 名称
                                */
                               NAME,
                               /**
                                * 编码
                                */
                               CODE,
                               /**
                                * 用户名
                                */
                               USERNAME;
}
