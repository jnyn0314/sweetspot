package com.incubin.sweetspot.Service;

import com.incubin.sweetspot.entity.User;
import com.incubin.sweetspot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public User registerUser(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public Optional<User> findByLogin_id(String loginId) {
        return userRepository.findByLoginId(loginId);
    }
/*
    public boolean checkPassword(User user, String rawPassword) {
        return passwordEncoder.matches(rawPassword, user.getPassword());
    }
 */
public boolean checkPassword(User user, String rawPassword) {
    // 평문 비밀번호 비교 (테스트용)
    return rawPassword.equals(user.getPassword());
}

}
