package com.sanju.mypoc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.ComponentScan;

import com.sanju.property.FileStorageProperties;

@SpringBootApplication
@ComponentScan(basePackages = {"com.sanju"})
@EnableConfigurationProperties({
    FileStorageProperties.class
})
public class MypocApplication {

	public static void main(String[] args) {
		SpringApplication.run(MypocApplication.class, args);
	}

}
