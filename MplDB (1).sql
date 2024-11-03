-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 26 2024 г., 08:32
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `MplDB`
--

-- --------------------------------------------------------

--
-- Структура таблицы `addresses`
--

CREATE TABLE `addresses` (
  `id-address` int UNSIGNED NOT NULL,
  `id-client-creator` int UNSIGNED NOT NULL,
  `country` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `state` varchar(60) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `city-town` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `street` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `building` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `door` varchar(20) NOT NULL,
  `post-index` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id-category` int UNSIGNED NOT NULL,
  `name` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE `client` (
  `id-client` int UNSIGNED NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `surname` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `patronymic` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `main-address-name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `main-address-id` int UNSIGNED NOT NULL,
  `date-of-birth` date NOT NULL,
  `date-of-registration` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `phone` int NOT NULL,
  `password` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `order-compound`
--

CREATE TABLE `order-compound` (
  `id-order` int UNSIGNED NOT NULL,
  `id-product` int UNSIGNED NOT NULL,
  `number` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `order-info`
--

CREATE TABLE `order-info` (
  `id-order` int UNSIGNED NOT NULL,
  `id-client` int UNSIGNED NOT NULL,
  `date-of-placement` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `planned-arrival-date` datetime NOT NULL,
  `id-adress` int UNSIGNED NOT NULL,
  `price` decimal(6,0) UNSIGNED NOT NULL,
  `size-m-iii` int UNSIGNED NOT NULL,
  `delivering-company` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `producer`
--

CREATE TABLE `producer` (
  `id-producer` int UNSIGNED NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `description` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Структура таблицы `product`
--

CREATE TABLE `product` (
  `id-product` int UNSIGNED NOT NULL,
  `barcode` int UNSIGNED NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `id-producer` int UNSIGNED NOT NULL,
  `provider` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `number` int UNSIGNED NOT NULL,
  `reserved` int UNSIGNED NOT NULL,
  `available` int UNSIGNED NOT NULL,
  `description` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `category` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id-address`),
  ADD KEY `id-client-creator` (`id-client-creator`),
  ADD KEY `post-index` (`post-index`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id-category`);

--
-- Индексы таблицы `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id-client`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD KEY `main-address-id` (`main-address-id`);

--
-- Индексы таблицы `order-compound`
--
ALTER TABLE `order-compound`
  ADD KEY `id-order` (`id-order`),
  ADD KEY `id-product` (`id-product`);

--
-- Индексы таблицы `order-info`
--
ALTER TABLE `order-info`
  ADD PRIMARY KEY (`id-order`),
  ADD KEY `id-client` (`id-client`),
  ADD KEY `id-adress` (`id-adress`);

--
-- Индексы таблицы `producer`
--
ALTER TABLE `producer`
  ADD PRIMARY KEY (`id-producer`);

--
-- Индексы таблицы `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id-product`),
  ADD UNIQUE KEY `barcode` (`barcode`),
  ADD UNIQUE KEY `category` (`category`),
  ADD KEY `id-producer` (`id-producer`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id-address` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id-category` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `client`
--
ALTER TABLE `client`
  MODIFY `id-client` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `order-info`
--
ALTER TABLE `order-info`
  MODIFY `id-order` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `producer`
--
ALTER TABLE `producer`
  MODIFY `id-producer` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `product`
--
ALTER TABLE `product`
  MODIFY `id-product` int UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `addresses_ibfk_1` FOREIGN KEY (`id-client-creator`) REFERENCES `client` (`id-client`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `client`
--
ALTER TABLE `client`
  ADD CONSTRAINT `client_ibfk_1` FOREIGN KEY (`main-address-id`) REFERENCES `addresses` (`id-address`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `order-compound`
--
ALTER TABLE `order-compound`
  ADD CONSTRAINT `order-compound_ibfk_1` FOREIGN KEY (`id-order`) REFERENCES `order-info` (`id-order`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `order-compound_ibfk_2` FOREIGN KEY (`id-product`) REFERENCES `product` (`id-product`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `order-info`
--
ALTER TABLE `order-info`
  ADD CONSTRAINT `order-info_ibfk_1` FOREIGN KEY (`id-client`) REFERENCES `client` (`id-client`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order-info_ibfk_2` FOREIGN KEY (`id-adress`) REFERENCES `addresses` (`id-address`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id-producer`) REFERENCES `producer` (`id-producer`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`id-category`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
