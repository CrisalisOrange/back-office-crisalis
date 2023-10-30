package com.orange.Crisalis.excepcions;

import com.orange.Crisalis.excepcions.custom.EmptyElementException;
import com.orange.Crisalis.excepcions.custom.NotCreatedException;
import com.orange.Crisalis.excepcions.custom.UnauthorizedException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ApiExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler({
            EmptyElementException.class,
            NotCreatedException.class
    })
    @ResponseBody
    public ErrorMessage badRequest(HttpServletRequest request, Exception exception){

        return new ErrorMessage(exception, request.getRequestURI());

    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler({
            UnauthorizedException.class
    })
    @ResponseBody
    public void unauthorized(){
        //is empty because http in case 401 not supported body response
    }
}