/*
 * eiam-portal - Employee Identity and Access Management Program
 * Copyright © 2020-2023 TopIAM (support@topiam.cn)
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
package cn.topiam.employee.portal.service.impl;

import java.util.List;
import java.util.Objects;

import org.springframework.stereotype.Service;

import cn.topiam.employee.authentication.captcha.geetest.GeeTestCaptchaProviderConfig;
import cn.topiam.employee.common.entity.authentication.IdentityProviderEntity;
import cn.topiam.employee.common.repository.authentication.IdentityProviderRepository;
import cn.topiam.employee.common.repository.setting.SettingRepository;
import cn.topiam.employee.core.security.captcha.CaptchaProviderConfig;
import cn.topiam.employee.portal.converter.LoginConfigConverter;
import cn.topiam.employee.portal.pojo.result.LoginConfigResult;
import cn.topiam.employee.portal.service.LoginConfigService;

import lombok.AllArgsConstructor;
import static cn.topiam.employee.common.enums.CaptchaProviderType.GEE_TEST;
import static cn.topiam.employee.core.context.SettingContextHelp.getCaptchaProviderConfig;

/**
 * LoginConfigService
 *
 * @author TopIAM
 * Created by support@topiam.cn on  2022/3/25 21:50
 */
@Service
@AllArgsConstructor
public class LoginConfigServiceImpl implements LoginConfigService {

    /**
     * 获取登录配置
     *
     * @return {@link LoginConfigResult}
     */
    @Override
    public LoginConfigResult getLoginConfig() {
        CaptchaProviderConfig config = getCaptchaProviderConfig();
        LoginConfigResult.LoginConfigResultBuilder builder = LoginConfigResult.builder();
        if (!Objects.isNull(config)) {
            //极验
            if (config.getProvider().equals(GEE_TEST)) {
                builder.captcha(LoginConfigResult.Captcha.builder()
                    .appId(((GeeTestCaptchaProviderConfig) config).getCaptchaId())
                    .type(config.getProvider()).build());
            }
        }
        //获取IDPS
        List<IdentityProviderEntity> list = identityProviderRepository
            .findByEnabledIsTrueAndDisplayedIsTrue();
        List<LoginConfigResult.Idps> idps = loginConfigConverter
            .entityConverterToLoginConfigListResult(list);
        builder.idps(idps);
        return builder.build();
    }

    /**
     * AuthenticationConverter
     */
    private final LoginConfigConverter       loginConfigConverter;

    /**
     * SettingRepository
     */
    private final SettingRepository          settingRepository;

    /**
     * AuthenticationSourceRepository
     */
    private final IdentityProviderRepository identityProviderRepository;
}
