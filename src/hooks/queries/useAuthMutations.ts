import { useMutation, type UseMutationOptions } from "@tanstack/react-query";
import { authService } from "../../services/authService";

// Custom hook for the register mutation
export const useRegisterMutation = (options?: UseMutationOptions<any, Error, any>) => {
    return useMutation({
        mutationFn: authService.registerUser,
        ...options, // Allows overriding onSuccess, onError, etc., directly from the component
    });
};

// Custom hook for the login mutation (for later use in Login.tsx)
export const useLoginMutation = (options?: UseMutationOptions<any, Error, any>) => {
    return useMutation({
        mutationFn: authService.loginUser,
        ...options,
    });
};
