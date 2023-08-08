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
package cn.topiam.employee.common.enums.app;

import com.fasterxml.jackson.annotation.JsonValue;

import cn.topiam.employee.support.enums.BaseEnum;
import cn.topiam.employee.support.web.converter.EnumConvert;

/**
 * Sso 发起方
 *
 * OIDC 应用：支持应用发起，若要支持门户端发起，需配置SSO 发起登录URL
 * JWT 应用：支持应用发起，也支持门户端发起
 * FORM 应用：支持应用发起，也支持门户端发起
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/6/4 23:33
 */
public enum InitLoginType implements BaseEnum {

                                               /**
                                                * 仅应用发起SSO
                                                */
                                               APP("only_app_init_sso", "只允许应用发起"),

                                               /**
                                                * 支持门户或者应用发起SSO协议应用默认取值范围。
                                                */
                                               PORTAL_OR_APP("portal_or_app_init_sso", "支持门户和应用发起");

    /**
     * code
     */
    @JsonValue
    private final String code;
    /**
     * desc
     */
    private final String desc;

    InitLoginType(String code, String desc) {
        this.code = code;
        this.desc = desc;
    }

    @Override
    public String getCode() {
        return code;
    }

    @Override
    public String getDesc() {
        return desc;
    }

    /**
     * 获取类型
     *
     * @param code {@link String}
     * @return {@link InitLoginType}
     */
    @EnumConvert
    public static InitLoginType getType(String code) {
        InitLoginType[] values = values();
        for (InitLoginType status : values) {
            if (String.valueOf(status.getCode()).equals(code)) {
                return status;
            }
        }
        return null;
    }

    @Override
    public String toString() {
        return this.code;
    }
}
