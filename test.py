def fibonacci(n):
    fib_series = [0, 1]  
    while len(fib_series) < n:
        next_term = fib_series[-1] + fib_series[-2]  
        fib_series.append(next_term)  
    return fib_series[:n] 


n_terms = 10
fib_series = fibonacci(n_terms)
print(f"Fibonacci series up to {n_terms} terms:", fib_series)
