//? ---------------------------------------------------------------
//?    COMANDOS BASICOS
//? ---------------------------------------------------------------
/*
-- Obtener el estado de un servicio
* Get-Service -Name <service_name>

-- Iniciar un servicio
* Start-Service <service_name>

-- Obtener una lista de servicios con nombre similar a una cadena
-- de texto
* Get-Service | Where-Object { $_.DisplayName -like "*<text>*"}
*/