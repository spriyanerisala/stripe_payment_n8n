# Stripe Payment Integration using React.js and n8n

## Overview

This project demonstrates a simple Stripe Checkout integration using React.js and n8n. Users can view products and securely complete payments through Stripe Checkout.

## Features

* React.js frontend
* Product listing with images and prices
* Buy Now functionality
* Stripe Checkout integration
* n8n webhook automation
* Success and Cancel payment pages
* Responsive UI

## Tech Stack

* React.js
* Vite
* Stripe Checkout
* n8n

## Workflow

1. User visits the application.
2. User selects a product.
3. User clicks the **Buy Now** button.
4. React sends a request to an n8n webhook.
5. n8n creates a Stripe Checkout Session.
6. User completes payment through Stripe.
7. Stripe redirects the user to:

   * Success Page (Payment Completed)
   * Cancel Page (Payment Cancelled)

## Installation

```bash
git clone https://github.com/spriyanerisala/stripe_payment_n8n/tree/main
cd client
npm install
npm run dev
```


## Author

Siva Priya Nerisala

Built as a learning project to explore Stripe payment integration and workflow automation with n8n.
