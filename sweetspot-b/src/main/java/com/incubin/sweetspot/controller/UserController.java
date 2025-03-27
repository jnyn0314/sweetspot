package com.incubin.sweetspot.controller;

import com.incubin.sweetspot.Service.UserService;
import com.incubin.sweetspot.config.JwtTokenProvider;
import com.incubin.sweetspot.dto.RequestLogin;
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
    private final JwtTokenProvider jwtTokenProvider;

    public UserController(UserService userService, JwtTokenProvider jwtTokenProvider) {
        this.userService = userService;
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody RequestLogin loginRequest) {
        String loginId = loginRequest.getLoginId();
        String password = loginRequest.getPassword();
        String role = loginRequest.getRole();

        System.out.println("Received login request: loginId=" + loginId + ", role=" + role);

        Optional<User> existingUser = userService.findByLogin_id(loginId);

        if (existingUser.isPresent()) {
            User foundUser = existingUser.get();
            if (userService.checkPassword(foundUser, password) && foundUser.getRole().toString().equalsIgnoreCase(role)) {
                String token = jwtTokenProvider.generateToken(foundUser);

                Map<String, Object> response = new HashMap<>();
                response.put("success", true);
                response.put("token", token);
                response.put("role", foundUser.getRole().toString());
                return ResponseEntity.ok(response);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password or role");
            }
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not found");
        }
    }
}
