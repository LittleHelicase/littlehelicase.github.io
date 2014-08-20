---
layout: post
title: "Lid Driven Cavity"
description: "A simple verification method for Fluid simulations with complex behaviour"
category: 
tags: ["Interactive Science"]
---
{% include JB/setup %}

The Lid Driven Cavity (LCD) flow problem is a simple problem in fluid mechanics with 
that is used widely to verify fluid simulations. In contrast to the Poiseuille
Flow through a cylindrical pipe, the LCD flow problem has no analytical solution.

A number of publications proposed solutions for this problem for different 
<span id="reynolds" class="keyword">Reynolds[^reynolds]</span>
numbers.

<script>
$.getJSON("https://cdn.rawgit.com/LittleHelicase/1d758e36d6f3f753bb0e/raw/dbbe651dc656c4f8dee346eb29b48f05242416aa/ldc_100.json"
  , function(ldc100){
    console.log(ldc100);
  });
</script>

[^reynolds]: The Reynolds number is a way of describing the scenario
