package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.UserService;
import com.incubin.sweetspot.dto.RequestLogin;
import com.incubin.sweetspot.entity.Role;
import com.incubin.sweetspot.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody RequestLogin loginRequest) {
        String loginId = loginRequest.getLoginId();
        String password = loginRequest.getPassword();
        String role = loginRequest.getRole();

        System.out.println("Received login request: loginId=" + loginId + ", role=" + role);

        Optional<User> existingUser = userService.findByLoginId(loginId);

        if (existingUser.isPresent()) {
            User foundUser = existingUser.get();
            if (userService.checkPassword(foundUser, password) && foundUser.getRole().toString().equalsIgnoreCase(role)){ // 평문 비밀번호 비교
                Map<String, Object> response = new HashMap<>();
                response.put("message", "Login successful");
                response.put("role", foundUser.getRole());
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }
    }
}
