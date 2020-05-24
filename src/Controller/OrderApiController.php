<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

// use Symfony\Flex\Response;
use Symfony\Component\HttpFoundation\Response;

class OrderApiController extends AbstractController
{
    /**
     * @Route("/order/get", name="order_get")
     */
    public function index()
    {
        // return $this->render('order_api/index.html.twig', [
        //     'controller_name' => 'OrderApiController',
        // ]);
        $ordersDirectories = __DIR__.'/orders.json';
        $ordersJson = file_get_contents($ordersDirectories);
        $orders = json_decode($ordersJson, true);
        
        $response = new Response(json_encode($orders));
        return $response;
    }
}
