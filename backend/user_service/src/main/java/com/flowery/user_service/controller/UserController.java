package com.flowery.user_service.controller;

import com.flowery.user_service.model.dto.UserDTO;
import com.flowery.user_service.model.dto.UserListDTO;
import com.flowery.user_service.model.dto.UserLocationDTO;
import com.flowery.user_service.service.LocationService;
import com.flowery.user_service.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("users")
public class UserController {
    private final UserService userService;
    private final LocationService locationService;

    public UserController(UserService userService, LocationService locationService) {
        this.userService = userService;
        this.locationService = locationService;
    }

    @GetMapping("")
    public ResponseEntity<List<UserListDTO>> getAllUsers() {
        var userList = userService.getAllUsers();
        return ResponseEntity.ok(userList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) throws Exception {
        var user = userService.getUserById(id);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/check-user/{googleId}")
    public ResponseEntity<Long> getUserByGoogleId(@PathVariable String googleId) throws Exception {
        var user = userService.getUserByGoogleId(googleId);
        return ResponseEntity.ok(user);
    }

    @PostMapping("")
    public ResponseEntity<Long> createUser(@RequestBody UserDTO userDTO) throws Exception {
        var user = userService.createUser(userDTO);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Long> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) throws Exception {
        var user = userService.updateUser(id, userDTO);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) throws Exception {
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("{id}/locations")
    public ResponseEntity<Long> addLocation(@PathVariable Long id, @RequestBody UserLocationDTO userLocationDTO) throws Exception {
        Long postedLocationId = locationService.addLocation(id, userLocationDTO);
        return ResponseEntity.ok(postedLocationId);
    }

    @GetMapping("{id}/locations")
    public ResponseEntity<List<UserLocationDTO>> getLocations(@PathVariable Long id) throws Exception {
        List<UserLocationDTO> locations = locationService.getLocations(id);
        return ResponseEntity.ok(locations);
    }
}
