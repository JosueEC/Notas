//? ----------------------------------------------------------------
//?    COMANDOS BASICOS
//? ----------------------------------------------------------------
/*
-- git reset es util cuando queremos deshacer cambios en el repo
-- local, cuando los cambios ya se subieron al repo remoto y se
-- quieren deshacer, es mejor usar git revert

-- Remover un archivo de la zona de staging
-- (Los cambios hechos en el archivo no se perderan)
* git reset <HEAD> <file_name>

-- Reestablecer una rama a un commit anterior
-- NOTA: Si se mite el 'MODE' el valor predeterminado es --mixed
* git reset <MODE> <COMMIT/ID>
*/