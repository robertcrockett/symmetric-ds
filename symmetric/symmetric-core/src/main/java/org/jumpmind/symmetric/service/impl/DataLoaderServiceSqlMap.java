package org.jumpmind.symmetric.service.impl;

import java.util.Map;

import org.jumpmind.db.platform.IDatabasePlatform;

public class DataLoaderServiceSqlMap extends AbstractSqlMap {

    DataLoaderServiceSqlMap(IDatabasePlatform platform, Map<String, String> replacementTokens) {
        super(platform, replacementTokens);

        // @formatter:off
        
        putSql("updateConflictSettingsSql", 
          "update $(conflict_settings) set                                                          " +
          "source_node_group_id=?, target_node_group_id=?,                                          " +
          "target_channel_id=?, target_catalog_name=?, target_schema_name=?, target_table_name=?,   " +
          "detect_update_type=?, detect_delete_type=?,                                              " +
          "resolve_update_type=?, resolve_insert_type=?, resolve_delete_type=?,                     " +
          "version_column_name=?, retry_count=?,                                                    " +
          "last_update_by=?, last_update_time=current_timestamp where conflict_id=?                 ");
        
        putSql("insertConflictSettingsSql", 
          "insert into $(conflict_settings) (                                                       " +
          "source_node_group_id, target_node_group_id,                                              " +
          "target_channel_id, target_catalog_name, target_schema_name, target_table_name,           " +
          "detect_update_type, detect_delete_type,                                                  " +
          "resolve_update_type, resolve_insert_type, resolve_delete_type,                           " +
          "version_column_name, retry_count,                                                        " +
          "create_time, last_update_by, last_update_time, conflict_id)                              " +
          "values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, current_timestamp, ?, current_timestamp, ?)");
        
        putSql("deleteConflictSettingsSql", "delete from $(conflict_settings) where conflict_id=?");
        
        putSql("selectConflictSettingsSql",
                "select " +
                "source_node_group_id, target_node_group_id,                                              " +
                "target_channel_id, target_catalog_name, target_schema_name, target_table_name,           " +
                "detect_update_type, detect_delete_type,                                                  " +
                "resolve_update_type, resolve_insert_type, resolve_delete_type,                           " +
                "version_column_name, retry_count,                                                        " +
                "create_time, last_update_by, last_update_time, conflict_id from $(conflict_settings)    ");
    }
}
