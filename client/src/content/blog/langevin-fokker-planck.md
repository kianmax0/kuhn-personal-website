## Purpose of this note

This note explains the Langevin equation and the Fokker–Planck equation in a way that is suitable for students who are seeing stochastic processes for the first time. The goal is not only to state formulas, but also to explain why each formula appears and how one step leads to the next.

We will focus on the physical example that motivated these equations historically: **Brownian motion**, the random motion of a small particle suspended in a fluid. From this example we will introduce:

1. the idea of a random force;
2. the Langevin equation;
3. probability densities and transition probabilities;
4. the Kramers–Moyal expansion;
5. the Fokker–Planck equation;
6. simple solvable examples, including the Wiener process and the Ornstein–Uhlenbeck process;
7. the meaning of stationary distributions;
8. a short introduction to the relativistic Ornstein–Uhlenbeck process.

## 1. Physical motivation: Brownian motion

Brownian motion is the irregular motion of a small particle suspended in a liquid or gas. The particle is constantly hit by many molecules of the surrounding fluid. Each collision is tiny, but there are so many collisions that the total force becomes complicated and unpredictable.

If we tried to write Newton's equation for every molecule in the fluid, the problem would be impossible. Instead, we describe the complicated microscopic collisions statistically.

The main idea is:

> The particle experiences a deterministic friction force plus a random fluctuating force.

The deterministic friction force slows the particle down. The random force represents the many unpredictable molecular collisions.

## 2. The basic Langevin equation

Let $v(t)$ be the velocity of a Brownian particle at time $t$. Without random collisions, a simple friction model gives

$$m\frac{dv}{dt} = -\alpha v,$$

where:

- $m$ is the mass of the particle;
- $\alpha > 0$ is the friction coefficient;
- $-\alpha v$ is a force opposite to the motion.

Dividing by $m$, define $\gamma = \alpha/m$. Then

$$\frac{dv}{dt} = -\gamma v.$$

This equation has the solution

$$v(t) = v_0 e^{-\gamma t},$$

so the velocity decays exponentially to zero.

But a Brownian particle does not simply stop. It continues to move randomly because the surrounding molecules keep hitting it. Langevin added a random force term:

$$\frac{dv}{dt} = -\gamma v + \Gamma(t).$$

This is the **Langevin equation**.

Here $\Gamma(t)$ is a random noise term. It changes randomly in time and represents the effect of molecular collisions.

## 3. Assumptions about the random force

To make the model mathematically usable, we assume two basic statistical properties of $\Gamma(t)$.

### 3.1 Zero mean

We assume

$$\langle \Gamma(t) \rangle = 0.$$

This means the random force has no preferred direction. Sometimes it pushes the particle to the right, sometimes to the left, and the average is zero.

### 3.2 Delta correlation

We also assume

$$\langle \Gamma(t)\Gamma(t') \rangle = q\,\delta(t - t'),$$

where $q > 0$ measures the strength of the noise.

This means the random force is correlated only with itself at the same instant. Values of the noise at different times are independent.

This idealized noise is called **white noise**.

The word "white" is used because all frequencies contribute equally, just as white light contains all visible frequencies.

## 4. Solving the basic Langevin equation

We now solve

$$\frac{dv}{dt} = -\gamma v + \Gamma(t),$$

with initial condition $v(0) = v_0$.

This is a linear differential equation. Move the deterministic term to the left:

$$\frac{dv}{dt} + \gamma v = \Gamma(t).$$

Multiply both sides by the integrating factor $e^{\gamma t}$:

$$e^{\gamma t}\frac{dv}{dt} + \gamma e^{\gamma t} v = e^{\gamma t}\Gamma(t).$$

The left-hand side is the derivative of $e^{\gamma t}v(t)$:

$$\frac{d}{dt}\left(e^{\gamma t} v(t)\right) = e^{\gamma t}\Gamma(t).$$

Integrate from $0$ to $t$:

$$e^{\gamma t}v(t) - v_0 = \int_0^t e^{\gamma s}\Gamma(s)\,ds.$$

Therefore

$$v(t) = v_0 e^{-\gamma t} + \int_0^t e^{-\gamma(t-s)}\Gamma(s)\,ds.$$

This formula says:

- the initial velocity decays as $v_0 e^{-\gamma t}$;
- the random force contributes through a weighted integral over past noise values;
- recent noise has more influence than old noise because of the exponential factor.

## 5. Mean velocity

Take the expectation of the solution:

$$\langle v(t) \rangle = \left\langle v_0 e^{-\gamma t} + \int_0^t e^{-\gamma(t-s)}\Gamma(s)\,ds \right\rangle.$$

Using linearity of expectation,

$$\langle v(t) \rangle = v_0 e^{-\gamma t} + \int_0^t e^{-\gamma(t-s)}\langle \Gamma(s) \rangle\,ds.$$

Since $\langle \Gamma(s) \rangle = 0$, the integral vanishes:

$$\langle v(t) \rangle = v_0 e^{-\gamma t}.$$

So the average velocity decays to zero, even though each individual particle keeps moving randomly.

## 6. Velocity correlation function

The velocity correlation tells us how the velocity at one time is related to the velocity at another time:

$$\langle v(t_1)v(t_2) \rangle.$$

Using the solution

$$v(t) = v_0 e^{-\gamma t} + \int_0^t e^{-\gamma(t-s)}\Gamma(s)\,ds,$$

we write

$$v(t_1) = v_0 e^{-\gamma t_1} + \int_0^{t_1} e^{-\gamma(t_1-s_1)}\Gamma(s_1)\,ds_1,$$

$$v(t_2) = v_0 e^{-\gamma t_2} + \int_0^{t_2} e^{-\gamma(t_2-s_2)}\Gamma(s_2)\,ds_2.$$

Multiply and take expectation. The terms linear in $\Gamma$ vanish because $\langle \Gamma \rangle = 0$. We obtain

$$\langle v(t_1)v(t_2) \rangle = v_0^2 e^{-\gamma(t_1+t_2)} + \int_0^{t_1}\int_0^{t_2} e^{-\gamma(t_1-s_1)}e^{-\gamma(t_2-s_2)}\langle \Gamma(s_1)\Gamma(s_2) \rangle\,ds_1\,ds_2.$$

Use the noise correlation

$$\langle \Gamma(s_1)\Gamma(s_2) \rangle = q\,\delta(s_1 - s_2).$$

Then

$$\langle v(t_1)v(t_2) \rangle = v_0^2 e^{-\gamma(t_1+t_2)} + q\int_0^{\min(t_1,t_2)} e^{-\gamma(t_1-s)}e^{-\gamma(t_2-s)}\,ds.$$

The upper limit is $\min(t_1, t_2)$ because the delta function forces $s_1 = s_2$, and the common value must lie inside both integration intervals.

Now simplify the integral:

$$e^{-\gamma(t_1-s)}e^{-\gamma(t_2-s)} = e^{-\gamma(t_1+t_2)}e^{2\gamma s}.$$

Thus

$$q\int_0^{\min(t_1,t_2)} e^{-\gamma(t_1+t_2)}e^{2\gamma s}\,ds = \frac{q}{2\gamma}e^{-\gamma(t_1+t_2)}\left(e^{2\gamma\min(t_1,t_2)} - 1\right).$$

This can be rewritten as

$$\frac{q}{2\gamma}\left(e^{-\gamma|t_1-t_2|} - e^{-\gamma(t_1+t_2)}\right).$$

Therefore

$$\langle v(t_1)v(t_2) \rangle = v_0^2 e^{-\gamma(t_1+t_2)} + \frac{q}{2\gamma}\left(e^{-\gamma|t_1-t_2|} - e^{-\gamma(t_1+t_2)}\right).$$

At long times, the terms involving $v_0$ disappear, giving the stationary correlation

$$\langle v(t_1)v(t_2) \rangle_{\mathrm{st}} = \frac{q}{2\gamma}e^{-\gamma|t_1-t_2|}.$$

This means velocities become less correlated as the time separation $|t_1 - t_2|$ increases.

## 7. Determining the noise strength from thermal equilibrium

At equilibrium, the average kinetic energy of a one-dimensional particle is

$$E = \left\langle \frac{1}{2}mv^2 \right\rangle = \frac{1}{2}k_B T,$$

where:

- $k_B$ is Boltzmann's constant;
- $T$ is temperature.

But the kinetic energy is also

$$E = \frac{1}{2}m\langle v^2 \rangle_{\mathrm{st}}.$$

At stationarity,

$$\langle v^2 \rangle_{\mathrm{st}} = \frac{q}{2\gamma m}.$$

Therefore

$$\frac{1}{2}m \cdot \frac{q}{2\gamma m} = \frac{1}{2}k_B T.$$

Set this equal to $\frac{1}{2}k_B T$:

$$\frac{q}{4\gamma} = \frac{1}{2}k_B T.$$

Solving for $q$,

$$q = 2\gamma m k_B T.$$

This is a **fluctuation–dissipation relation**: the strength of the random fluctuations is tied to the friction coefficient.

## 8. Mean squared displacement

The position satisfies

$$x(t) - x(0) = \int_0^t v(s)\,ds.$$

Therefore

$$\langle [x(t) - x(0)]^2 \rangle = \left\langle \left(\int_0^t v(s_1)\,ds_1\right)\left(\int_0^t v(s_2)\,ds_2\right) \right\rangle.$$

Using linearity of integration and expectation,

$$\langle [x(t) - x(0)]^2 \rangle = \int_0^t\int_0^t \langle v(s_1)v(s_2) \rangle\,ds_1\,ds_2.$$

At long times, use the stationary correlation:

$$\langle v(s_1)v(s_2) \rangle_{\mathrm{st}} = \frac{q}{2\gamma}e^{-\gamma|s_1-s_2|}.$$

Then

$$\langle [x(t) - x(0)]^2 \rangle \approx \frac{q}{2\gamma}\int_0^t\int_0^t e^{-\gamma|s_1-s_2|}\,ds_1\,ds_2.$$

For large $t$, this grows approximately linearly:

$$\langle [x(t) - x(0)]^2 \rangle \approx \frac{q}{\gamma^2}t.$$

Using $q = 2\gamma m k_B T$, we obtain

$$\langle [x(t) - x(0)]^2 \rangle \approx \frac{2k_B T}{m\gamma}t.$$

This has the usual diffusion form

$$\langle [x(t) - x(0)]^2 \rangle \approx 2D_x t,$$

where the spatial diffusion coefficient is

$$D_x = \frac{k_B T}{m\gamma}.$$

## 9. Probability densities and transition probabilities

To connect the Langevin equation with the Fokker–Planck equation, we need probability densities.

Let $W(x,t)$ be the probability density of a random variable $x(t)$. That means $W(x,t)\,dx$ is the probability that $x(t)$ lies between $x$ and $x + dx$.

Now define the transition probability density $P(x, t+\tau \mid x', t)$. This means: the probability density that the system is at $x$ at time $t+\tau$, given that it was at $x'$ at time $t$.

For a Markov process, the future depends only on the current state, not on the full history. Then the probability density evolves according to

$$W(x, t+\tau) = \int P(x, t+\tau \mid x', t)\,W(x', t)\,dx'.$$

This is the starting point of the Kramers–Moyal expansion.

## 10. Moments of the transition probability

The transition probability describes possible changes from $x'$ to $x$. Define the jump

$$\Delta x = x - x'.$$

The $n$-th moment of the jump is

$$M_n(x', t, \tau) = \int (x - x')^n P(x, t+\tau \mid x', t)\,dx.$$

The first two moments have simple meanings:

$$M_1 = \langle \Delta x \rangle,$$

which measures average drift, and

$$M_2 = \langle (\Delta x)^2 \rangle,$$

which measures the size of fluctuations.

## 11. The Kramers–Moyal expansion

The Kramers–Moyal expansion describes how $W(x,t)$ changes in time using the moments $M_n$.

The result is

$$\frac{\partial W(x,t)}{\partial t} = \sum_{n=1}^{\infty} \left(-\frac{\partial}{\partial x}\right)^n \left[ D^{(n)}(x,t)\,W(x,t) \right].$$

The coefficients are

$$D^{(n)}(x,t) = \lim_{\tau \to 0} \frac{M_n(x,t,\tau)}{n!\,\tau}.$$

These are called the **Kramers–Moyal coefficients**.

### 11.1 Meaning of the first two coefficients

For $n = 1$,

$$D^{(1)}(x,t) = \lim_{\tau \to 0} \frac{\langle \Delta x \rangle}{\tau}.$$

So $D^{(1)}$ is the average rate of change. It is the **drift coefficient**.

For $n = 2$,

$$D^{(2)}(x,t) = \lim_{\tau \to 0} \frac{\langle (\Delta x)^2 \rangle}{2\tau}.$$

So $D^{(2)}$ measures how quickly the variance grows. It is the **diffusion coefficient**.

## 12. Basic derivation of the Kramers–Moyal expansion

We give the main steps carefully.

Start with

$$W(x, t+\tau) = \int P(x, t+\tau \mid x', t)\,W(x', t)\,dx'.$$

For a small time step, the system moves from $x'$ to nearby values $x$. We can express the transition probability as a distribution concentrated around $x'$, expanded in derivatives of the delta function.

The formal expansion is

$$P(x, t+\tau \mid x', t) = \sum_{n=0}^{\infty} \frac{(-1)^n}{n!}M_n(x',t,\tau)\,\delta^{(n)}(x - x').$$

Insert this into the integral for $W(x, t+\tau)$. Using the defining property of the delta function, the zeroth-order term gives $W(x,t)$. The remaining terms give

$$W(x, t+\tau) - W(x,t) = \sum_{n=1}^{\infty} \left(-\frac{\partial}{\partial x}\right)^n \left[\frac{M_n(x,t,\tau)}{n!}\,W(x,t)\right].$$

For small $\tau$, the left-hand side is

$$W(x, t+\tau) - W(x,t) = \tau\frac{\partial W}{\partial t} + O(\tau^2).$$

Divide by $\tau$ and take $\tau \to 0$. This gives

$$\frac{\partial W}{\partial t} = -\sum_{n=1}^{\infty} \left(\frac{\partial}{\partial x}\right)^n \left[D^{(n)}(x,t)\,W(x,t)\right],$$

where

$$D^{(n)}(x,t) = \lim_{\tau \to 0} \frac{M_n(x,t,\tau)}{n!\,\tau}.$$

This proves the Kramers–Moyal expansion at the formal level.

## 13. The Fokker–Planck equation

The Fokker–Planck equation is the special case of the Kramers–Moyal expansion where all coefficients above second order vanish:

$$D^{(n)} = 0, \quad n \geq 3.$$

Then

$$\frac{\partial W(x,t)}{\partial t} = -\frac{\partial}{\partial x}\left[D^{(1)}(x,t)\,W(x,t)\right] + \frac{\partial^2}{\partial x^2}\left[D^{(2)}(x,t)\,W(x,t)\right].$$

This is the **Fokker–Planck equation**.

The two terms have different meanings:

- the drift term moves probability mass systematically;
- the diffusion term spreads probability mass randomly.

The Fokker–Planck equation describes how the probability density changes over time.

## 14. Continuity-equation form

The Fokker–Planck equation can be written like a conservation law.

Define the probability current

$$S(x,t) = D^{(1)}(x,t)\,W(x,t) - \frac{\partial}{\partial x}\left[D^{(2)}(x,t)\,W(x,t)\right].$$

Then

$$\frac{\partial W}{\partial t} = -\frac{\partial S}{\partial x},$$

or

$$\frac{\partial W}{\partial t} + \frac{\partial S}{\partial x} = 0.$$

This resembles the continuity equation in fluid mechanics. It says probability is not created or destroyed; it only flows from one region to another.

## 15. Stationary distributions

A stationary distribution does not change with time. Therefore

$$\frac{\partial W_{\mathrm{st}}}{\partial t} = 0.$$

Using the continuity form,

$$\frac{\partial S_{\mathrm{st}}}{\partial x} = 0.$$

So the stationary probability current is constant:

$$S_{\mathrm{st}} = \text{constant}.$$

For many boundary conditions, such as probability densities that vanish at infinity, this constant must be zero:

$$S_{\mathrm{st}} = 0.$$

Then

$$D^{(1)}_{\mathrm{st}}(x)\,W_{\mathrm{st}}(x) - \frac{d}{dx}\left[D^{(2)}_{\mathrm{st}}(x)\,W_{\mathrm{st}}(x)\right] = 0.$$

This equation can often be solved to find the equilibrium distribution.

## 16. Brownian velocity distribution from the Fokker–Planck equation

For the Langevin equation

$$\frac{dv}{dt} = -\gamma v + \Gamma(t),$$

with

$$\langle \Gamma(t)\Gamma(t') \rangle = q\,\delta(t - t'),$$

we have

$$D^{(1)}(v) = -\gamma v, \qquad D^{(2)}(v) = \frac{q}{2}.$$

Using $q = 2\gamma m k_B T$, we get

$$D^{(2)} = \frac{\gamma m k_B T}{m} = \frac{\gamma k_B T}{m}.$$

The stationary condition with zero current is

$$-\gamma v\,W_{\mathrm{st}}(v) - \frac{d}{dv}\left[\frac{\gamma k_B T}{m}W_{\mathrm{st}}(v)\right] = 0.$$

Since $D^{(2)}$ is constant,

$$-\gamma v\,W_{\mathrm{st}}(v) - \frac{\gamma k_B T}{m}\frac{dW_{\mathrm{st}}}{dv} = 0.$$

Divide by $\gamma$:

$$-v\,W_{\mathrm{st}}(v) - \frac{k_B T}{m}\frac{dW_{\mathrm{st}}}{dv} = 0.$$

Rearrange:

$$\frac{dW_{\mathrm{st}}}{dv} = -\frac{m}{k_B T}v\,W_{\mathrm{st}}(v).$$

Divide by $W_{\mathrm{st}}$:

$$\frac{1}{W_{\mathrm{st}}}\frac{dW_{\mathrm{st}}}{dv} = -\frac{m}{k_B T}v.$$

The left-hand side is the derivative of $\ln W_{\mathrm{st}}$:

$$\frac{d}{dv}\ln W_{\mathrm{st}} = -\frac{m}{k_B T}v.$$

Integrate:

$$\ln W_{\mathrm{st}} = -\frac{mv^2}{2k_B T} + C.$$

Exponentiate:

$$W_{\mathrm{st}}(v) = A\exp\left(-\frac{mv^2}{2k_B T}\right).$$

The constant is found from normalization:

$$\int_{-\infty}^{\infty} W_{\mathrm{st}}(v)\,dv = 1.$$

Using the Gaussian integral

$$\int_{-\infty}^{\infty} e^{-av^2}\,dv = \sqrt{\frac{\pi}{a}},$$

with $a = m/(2k_B T)$, we get

$$A = \sqrt{\frac{m}{2\pi k_B T}}.$$

Therefore

$$W_{\mathrm{st}}(v) = \sqrt{\frac{m}{2\pi k_B T}}\exp\left(-\frac{mv^2}{2k_B T}\right).$$

This is the one-dimensional **Maxwell–Boltzmann distribution**.

## 17. Nonlinear Langevin equation

A more general Langevin equation has the form

$$\frac{d\xi}{dt} = h(\xi, t) + g(\xi, t)\,\Gamma(t),$$

where:

- $h(\xi, t)$ is the deterministic drift;
- $g(\xi, t)$ controls the noise strength;
- $\Gamma(t)$ is white noise.

Assume

$$\langle \Gamma(t) \rangle = 0, \qquad \langle \Gamma(t)\Gamma(t') \rangle = 2\,\delta(t - t').$$

With the Stratonovich interpretation, the corresponding Fokker–Planck coefficients are

$$D^{(1)}(\xi, t) = h(\xi, t) + g(\xi, t)\frac{\partial g}{\partial \xi}, \qquad D^{(2)}(\xi, t) = g^2(\xi, t).$$

Thus the Fokker–Planck equation becomes

$$\frac{\partial W}{\partial t} = -\frac{\partial}{\partial \xi}\left[\left(h + g\frac{\partial g}{\partial \xi}\right)W\right] + \frac{\partial^2}{\partial \xi^2}\left[g^2 W\right].$$

**Important interpretation:** Even if the noise has zero mean, a state-dependent noise strength $g(\xi, t)$ can create an extra drift term $g\,\partial g/\partial \xi$. This is called **noise-induced drift**.

## 18. Multidimensional Langevin equation

For several variables $\xi_i(t)$, the Langevin equation becomes

$$\frac{d\xi_i}{dt} = h_i(\xi, t) + g_{ij}(\xi, t)\,\Gamma_j(t).$$

Assume

$$\langle \Gamma_i(t) \rangle = 0, \qquad \langle \Gamma_i(t)\Gamma_j(t') \rangle = \delta_{ij}\,\delta(t - t').$$

The drift vector is

$$D^{(1)}_i = h_i + g_{kj}\frac{\partial g_{ij}}{\partial \xi_k}.$$

The diffusion matrix is

$$D^{(2)}_{ij} = g_{ik}g_{jk}.$$

The multidimensional Fokker–Planck equation is

$$\frac{\partial W}{\partial t} = -\frac{\partial}{\partial x_i}\left[D^{(1)}_i W\right] + \frac{\partial^2}{\partial x_i \partial x_j}\left[D^{(2)}_{ij} W\right].$$

Repeated indices are summed over. This is Einstein summation notation.

## 19. Wiener process

The simplest Fokker–Planck equation is pure diffusion:

$$D^{(1)} = 0, \qquad D^{(2)} = D.$$

Then

$$\frac{\partial P}{\partial t} = D\frac{\partial^2 P}{\partial x^2}.$$

The initial condition for a particle starting at $x_0$ is

$$P(x, t_0 \mid x_0, t_0) = \delta(x - x_0).$$

The solution is

$$P(x, t \mid x_0, t_0) = \frac{1}{\sqrt{4\pi D(t - t_0)}}\exp\left[-\frac{(x - x_0)^2}{4D(t - t_0)}\right].$$

This is a Gaussian distribution centered at $x_0$. Its variance is

$$\sigma^2 = 2D(t - t_0).$$

So the distribution spreads over time.

## 20. Basic proof of the Wiener-process solution

We solve

$$\frac{\partial P}{\partial t} = D\frac{\partial^2 P}{\partial x^2}.$$

Let $\tau = t - t_0$. Then

$$\frac{\partial P}{\partial \tau} = D\frac{\partial^2 P}{\partial x^2}.$$

Use the Fourier transform

$$\tilde{P}(k, \tau) = \int_{-\infty}^{\infty} P(x, \tau)\,e^{ikx}\,dx.$$

The second derivative transforms as

$$\frac{\partial^2 P}{\partial x^2} \longrightarrow -k^2 \tilde{P}.$$

Therefore

$$\frac{\partial \tilde{P}}{\partial \tau} = -Dk^2 \tilde{P}.$$

This ordinary differential equation has solution

$$\tilde{P}(k, \tau) = \tilde{P}(k, 0)\,e^{-Dk^2 \tau}.$$

The initial condition $P(x, 0) = \delta(x - x_0)$ gives

$$\tilde{P}(k, 0) = e^{ikx_0}.$$

Hence

$$\tilde{P}(k, \tau) = e^{ikx_0}e^{-Dk^2 \tau}.$$

Taking the inverse Fourier transform gives the Gaussian solution

$$P(x, \tau) = \frac{1}{\sqrt{4\pi D\tau}}\exp\left[-\frac{(x - x_0)^2}{4D\tau}\right].$$

## 21. Ornstein–Uhlenbeck process

The Ornstein–Uhlenbeck process has linear drift and constant diffusion:

$$D^{(1)}(x) = -\gamma x, \qquad D^{(2)} = D.$$

The Fokker–Planck equation is

$$\frac{\partial P}{\partial t} = \gamma\frac{\partial}{\partial x}(xP) + D\frac{\partial^2 P}{\partial x^2}.$$

This process describes a variable pulled back toward zero while also being randomly disturbed.

The transition probability is Gaussian:

$$P(x, t \mid x_0, t_0) = \frac{1}{\sqrt{2\pi D(1-e^{-2\gamma\tau})/\gamma}}\exp\left[-\frac{\gamma\left(x - x_0 e^{-\gamma\tau}\right)^2}{2D(1-e^{-2\gamma\tau})}\right],$$

where $\tau = t - t_0$.

The mean is

$$\langle x(t) \rangle = x_0 e^{-\gamma\tau},$$

and the variance is

$$\mathrm{Var}[x(t)] = \frac{D}{\gamma}(1 - e^{-2\gamma\tau}).$$

As $t \to \infty$,

$$\langle x(t) \rangle \to 0, \qquad \mathrm{Var}[x(t)] \to \frac{D}{\gamma}.$$

So the stationary distribution is

$$W_{\mathrm{st}}(x) = \sqrt{\frac{\gamma}{2\pi D}}\exp\left(-\frac{\gamma x^2}{2D}\right).$$

This stationary distribution exists only when $\gamma > 0$. If $\gamma < 0$, the drift pushes the system away from zero, and no normalizable stationary distribution exists.

## 22. Basic proof of the stationary Ornstein–Uhlenbeck distribution

Start from the stationary Fokker–Planck equation with zero current:

$$D^{(1)}_{\mathrm{st}}(x)\,W_{\mathrm{st}}(x) - \frac{d}{dx}\left[D^{(2)}_{\mathrm{st}}\,W_{\mathrm{st}}(x)\right] = 0.$$

Insert $D^{(1)}(x) = -\gamma x$ and $D^{(2)} = D$. Then

$$-\gamma x\,W_{\mathrm{st}}(x) - D\frac{dW_{\mathrm{st}}}{dx} = 0.$$

Rearrange:

$$\frac{dW_{\mathrm{st}}}{dx} = -\frac{\gamma}{D}x\,W_{\mathrm{st}}(x).$$

Divide by $W_{\mathrm{st}}$:

$$\frac{1}{W_{\mathrm{st}}}\frac{dW_{\mathrm{st}}}{dx} = -\frac{\gamma}{D}x.$$

Thus

$$\frac{d}{dx}\ln W_{\mathrm{st}} = -\frac{\gamma}{D}x.$$

Integrate:

$$\ln W_{\mathrm{st}} = -\frac{\gamma x^2}{2D} + C.$$

Therefore

$$W_{\mathrm{st}}(x) = A\exp\left(-\frac{\gamma x^2}{2D}\right).$$

Normalization gives

$$A = \sqrt{\frac{\gamma}{2\pi D}},$$

provided $\gamma > 0$. Hence

$$W_{\mathrm{st}}(x) = \sqrt{\frac{\gamma}{2\pi D}}\exp\left(-\frac{\gamma x^2}{2D}\right).$$

## 23. General stationary solution in one dimension

For time-independent coefficients, the stationary current is

$$S = D^{(1)}_{\mathrm{st}}(x)\,W_{\mathrm{st}}(x) - \frac{d}{dx}\left[D^{(2)}_{\mathrm{st}}(x)\,W_{\mathrm{st}}(x)\right].$$

Let

$$Y(x) = D^{(2)}_{\mathrm{st}}(x)\,W_{\mathrm{st}}(x).$$

Then

$$S = D^{(1)}_{\mathrm{st}}(x)\frac{Y(x)}{D^{(2)}_{\mathrm{st}}(x)} - \frac{dY}{dx}.$$

Rearrange:

$$-\frac{dY}{dx} + \frac{D^{(1)}_{\mathrm{st}}(x)}{D^{(2)}_{\mathrm{st}}(x)}Y = -S.$$

This is a first-order linear differential equation. Its integrating factor is

$$\mu(x) = \exp\left[-\int \frac{D^{(1)}_{\mathrm{st}}(u)}{D^{(2)}_{\mathrm{st}}(u)}\,du\right].$$

Then

$$\frac{d}{dx}[\mu(x)Y(x)] = -S\,\mu(x).$$

Integrating gives

$$Y(x) = \mu(x)^{-1}\left[C - S\int \mu(u)\,du\right].$$

Since $W_{\mathrm{st}} = Y/D^{(2)}_{\mathrm{st}}$, this gives a general stationary solution. The constants are fixed by boundary conditions and normalization.

## 24. Detailed balance

Detailed balance is a stronger condition than stationarity.

Stationarity says the total probability flowing into a state equals the total probability flowing out.

Detailed balance says every individual transition is balanced by its reverse transition.

For discrete states $m$ and $n$, detailed balance is

$$w(m \to n)\,W_{\mathrm{st}}(m) = w(n \to m)\,W_{\mathrm{st}}(n),$$

where $w(m \to n)$ is the transition rate from $m$ to $n$.

This means that, at equilibrium, the probability flow from $m$ to $n$ exactly equals the probability flow from $n$ to $m$.

Detailed balance is sufficient for stationarity, but stationarity does not always imply detailed balance. Some stationary systems can have circulating probability currents.

## 25. Solving the Fokker–Planck equation by eigenfunctions

Suppose the Fokker–Planck operator is time-independent:

$$\frac{\partial W}{\partial t} = \mathcal{L}_{\mathrm{FP}} W.$$

Try a separated solution:

$$W(x,t) = \phi(x)\,e^{-\lambda t}.$$

Substitute into the equation:

$$-\lambda \phi(x)\,e^{-\lambda t} = \mathcal{L}_{\mathrm{FP}}[\phi(x)\,e^{-\lambda t}].$$

Cancel $e^{-\lambda t}$:

$$\mathcal{L}_{\mathrm{FP}}\phi(x) = -\lambda \phi(x).$$

So solving the Fokker–Planck equation reduces to finding eigenfunctions and eigenvalues of the Fokker–Planck operator.

If we have eigenfunctions $\phi_n$, the general solution can often be written as

$$W(x,t) = \sum_n c_n \phi_n(x)\,e^{-\lambda_n t}.$$

The stationary distribution corresponds to $\lambda = 0$. Modes with $\lambda > 0$ decay over time.

## 26. Relativistic Ornstein–Uhlenbeck process: basic idea

In ordinary Brownian motion, the velocity can in principle take any value. But in relativity, no particle can move faster than the speed of light.

Therefore, a relativistic Brownian-motion model must respect the speed limit $|v| < c$.

Using units where $c = 1$, the relativistic relation between momentum and velocity is

$$v = \frac{p}{p_0},$$

where

$$p_0 = \sqrt{m^2 + |p|^2}.$$

Then

$$|v| = \frac{|p|}{\sqrt{m^2 + |p|^2}} < 1.$$

So using momentum instead of velocity automatically respects the relativistic speed limit.

A relativistic Langevin equation can be written for momentum:

$$\frac{dp_i}{dt} = -a_{ij}p_j + c_{ij}\,\Gamma_j(t).$$

Here:

- $a_{ij}$ describes friction;
- $c_{ij}$ describes noise strength;
- $\Gamma_j(t)$ are random white-noise terms.

The corresponding Fokker–Planck equation describes the probability density $W(t, x, p)$.

A common relativistic Ornstein–Uhlenbeck model chooses an energy-dependent friction and a diffusion coefficient that satisfy a relativistic version of the Einstein relation. This ensures that the stationary distribution becomes the relativistic Maxwell–Boltzmann distribution.

## 27. Big-picture summary

The Langevin and Fokker–Planck equations describe the same stochastic physics from two different viewpoints.

The **Langevin equation** follows individual random trajectories:

$$\frac{dx}{dt} = \text{deterministic drift} + \text{random noise}.$$

The **Fokker–Planck equation** follows the probability density of many such trajectories:

$$\frac{\partial W}{\partial t} = -\frac{\partial}{\partial x}(\text{drift} \times W) + \frac{\partial^2}{\partial x^2}(\text{diffusion} \times W).$$

The connection between them is made through the Kramers–Moyal expansion. When only the first two Kramers–Moyal coefficients are nonzero, the result is the Fokker–Planck equation.

The most important concepts are:

1. **Drift:** systematic motion caused by deterministic forces.
2. **Diffusion:** random spreading caused by noise.
3. **Stationary distribution:** a probability density that no longer changes in time.
4. **Fluctuation–dissipation relation:** the connection between random fluctuations and friction.
5. **Ornstein–Uhlenbeck process:** the simplest model combining linear restoring drift and Gaussian noise.

## 28. Minimal formula sheet

**Langevin equation**

$$\frac{dv}{dt} = -\gamma v + \Gamma(t)$$

**White-noise assumptions**

$$\langle \Gamma(t) \rangle = 0, \qquad \langle \Gamma(t)\Gamma(t') \rangle = q\,\delta(t - t')$$

**Solution of the linear Langevin equation**

$$v(t) = v_0 e^{-\gamma t} + \int_0^t e^{-\gamma(t-s)}\Gamma(s)\,ds$$

**Stationary velocity correlation**

$$\langle v(t_1)v(t_2) \rangle_{\mathrm{st}} = \frac{q}{2\gamma}e^{-\gamma|t_1-t_2|}$$

**Noise strength**

$$q = 2\gamma m k_B T$$

**Fokker–Planck equation**

$$\frac{\partial W}{\partial t} = -\frac{\partial}{\partial x}\left[D^{(1)} W\right] + \frac{\partial^2}{\partial x^2}\left[D^{(2)} W\right]$$

**Maxwell–Boltzmann stationary velocity distribution**

$$W_{\mathrm{st}}(v) = \sqrt{\frac{m}{2\pi k_B T}}\exp\left(-\frac{mv^2}{2k_B T}\right)$$

**Wiener process transition probability**

$$P(x, t \mid x_0, t_0) = \frac{1}{\sqrt{4\pi D(t - t_0)}}\exp\left[-\frac{(x - x_0)^2}{4D(t - t_0)}\right]$$

**Ornstein–Uhlenbeck stationary distribution**

$$W_{\mathrm{st}}(x) = \sqrt{\frac{\gamma}{2\pi D}}\exp\left(-\frac{\gamma x^2}{2D}\right)$$
